import { AddressInfo } from "net";
import express, {Request, Response} from 'express';
import cors from 'cors';
import { clients, DESCRIPTION } from "./data";
import { validate } from "./Functions/ageValidate";
import { currDate } from "./Functions/currDate";
import { replaceCPF } from "./Functions/replaceCPF";
import { dateValidate } from "./Functions/dateValidate";

const app = express()
app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(clients)
})

app.get("/users/accountBalance", (req: Request, res: Response) => {
  let CPF = req.query.CPF as string
  let statusCode = 500
  try {
    if(!CPF){
      statusCode = 422
      throw new Error("Parametro 'CPF' obrigatório.");
    }
    if (CPF.length !== 11) {
      statusCode = 422
      throw new Error("Digite o cpf no seguinte formato: (12345678910)");
    } else {
      CPF = replaceCPF(CPF)
    }
    const findCPF = clients.find(client => client.CPF === CPF)
    if(!findCPF) {
      statusCode = 404
      throw new Error("CPF não encontrado.");
    } 
    res.status(200).send({accountBalance: `R$ ${findCPF.accountBalance.toFixed(2).toString()}`})
  } catch ( error: any ) {
    res.status(statusCode).send({message: error.message})
  }
})

app.post("/users/create", (req: Request, res: Response) => {
  let statusCode = 500
  let { name, CPF, bornDate } = req.body
  try {
    if (!name || !CPF || !bornDate) {
      statusCode = 422
      throw new Error("Campos 'name', 'CPF' e 'bornData' obrigatórios.");
    }
    if (typeof name !== "string") {
      statusCode = 422
      throw new Error("Campo 'name' deve ser do tipo STRING.");
    }
    if (typeof CPF !== "string") {
      statusCode = 422
      throw new Error("Campo 'CPF' deve ser do tipo STRING.");
    }
    if (CPF.length !== 11) {
      statusCode = 422
      throw new Error("Digite o cpf no seguinte formato: (12345678910)");
    } else {
      CPF = replaceCPF(CPF)
    }
    const findCPF = clients.find(client => client.CPF === CPF)
    if (findCPF) {
      statusCode = 409
      throw new Error("CPF já existente.");
    }
    if (typeof bornDate !== "string") {
      statusCode = 422
      throw new Error("Campo 'bornDate' deve ser do tipo STRING.");
    }
    const eighteen = validate(bornDate)
    if (eighteen) {
      clients.push({name, CPF, bornDate, accountBalance: 0, statement: []})
    } else {
      statusCode = 403
      throw new Error("Você precisa ter 18 anos para criar uma conta.");
    }
    res.status(201).send({message: "Conta criada com sucesso!"})
  } catch (error: any) {
    res.status(statusCode).send({message: error.message})
  }
})

app.put("/users/accountBalance", (req: Request, res: Response) => {
  let statusCode = 500
  let { name, CPF } = req.query
  const {value} = req.body
  try {
    if (!name || !CPF) {
      statusCode = 422
      throw new Error("Campos obrigatórios faltando!")
    }
    if (typeof CPF !== "string") {
      statusCode = 422
      throw new Error("Campo 'CPF' deve ser do tipo STRING.");
    }
    if (CPF.length !== 11) {
      statusCode = 422
      throw new Error("Digite o cpf no seguinte formato: (12345678910)");
    } else {
      CPF = replaceCPF(CPF)
    }
    const findCPF = clients.find(client => client.name === name && client.CPF === CPF)
    if (!findCPF) {
      statusCode = 404
      throw new Error("CPF não encontrado.");
    }
    if (!value) {
      statusCode = 422
      throw new Error("Campo 'value' deve ser maior que 0.");
    }
    if (typeof value !== "number") {
      statusCode = 422
      throw new Error("Campo 'value' deve ser do tipo NUMBER.");
    }
    const { currDay, currMonth, currYear } = currDate()
    findCPF.accountBalance += value 
    findCPF.statement.push({
      value: Number(value.toFixed(2)),
      date: (currDay + "/" + currMonth + "/" + currYear).toString(),
      description: DESCRIPTION.DEPOSIT
    })
    res.status(200).send({message: `Valor de R$ ${value.toFixed(2)} depositado com sucesso!`})
  } catch ( error: any ) {
    res.status(statusCode).send({message: error.message})
  }
})

app.post("/users/pay/bill", (req: Request, res: Response) => {
  let CPF = req.query.CPF as string
  let { date, value } = req.body
  let statusCode = 500
  try {
    if (!CPF){
      statusCode = 422
      throw new Error("CPF obrigatório!")
    }
    if (CPF.length !== 11) {
      statusCode = 422
      throw new Error("Digite o cpf no seguinte formato: (12345678910)");
    } else {
      CPF = replaceCPF(CPF)
    }
    const findCPF = clients.find(client => client.CPF === CPF)
    if (!findCPF) {
      statusCode = 404
      throw new Error("CPF não encontrado.");
    }
    if (!date) {
      const { currDay, currMonth, currYear } = currDate()
      date = (currDay + "/" + currMonth + "/" + currYear).toString()
    }
    if (typeof date !== "string") {
      statusCode = 422
      throw new Error("Campo 'bornDate' deve ser do tipo STRING.");
    }
    if (dateValidate(date)) {
      statusCode = 422
      throw new Error("Boleto vencido.");
    }
    if (!value) {
      statusCode = 422
      throw new Error("Campo 'value' deve ser maior que 0.");
    }
    if (typeof value !== "number") {
      statusCode = 422
      throw new Error("Campo 'value' deve ser do tipo NUMBER.");
    }
    if (findCPF.accountBalance < value) {
      statusCode = 403
      throw new Error("Saldo Insuficiente.");
    }
    findCPF.statement?.push({value: -value, date, description: DESCRIPTION.PAYMENT})

    res.status(201).send({message: `Conta será debitada no dia ${date}.`})
  } catch (error: any) {
    res.status(statusCode).send({message: error.message})
  }
})

app.put("/users/pay/bill", (req: Request, res: Response) => {
  clients.forEach(client => {
    let value = 0
    if (client.statement.length > 0) {
      client.statement.map(statement => {
        if (statement.description === DESCRIPTION.PAYMENT && dateValidate(statement.date)) {
          value += statement.value
          statement.description = DESCRIPTION.SUCESSFULLPAYMENT
        }
        if (statement.description === DESCRIPTION.TRANSFER && dateValidate(statement.date)) {
          value += statement.value
          statement.description = DESCRIPTION.SUCESSTRANSFER
        }
      })
    }
    if(value){
      return client.accountBalance += value
    }
  })

  res.status(200).send({message: "Todos os saldos atualizados."})
})

app.post("/users/transfer", (req: Request, res: Response) => {
  let statusCode = 500
  let { name, CPF } = req.query
  let { nameReciever, CPFReciever, value } = req.body
  try {
    if (!name || !CPF) {
      statusCode = 422
      throw new Error("Campos 'name' e 'CPF' Obrigatórios.")
    }
    if (typeof name !== "string") {
      statusCode = 422
      throw new Error("Campo 'name' deve ser do tipo STRING.");
    }
    if (typeof CPF !== "string") {
      statusCode = 422
      throw new Error("Campo 'CPF' deve ser do tipo STRING.");
    }
    if (CPF.length !== 11) {
      statusCode = 422
      throw new Error("Digite o cpf no seguinte formato: (12345678910)");
    } else {
      CPF = replaceCPF(CPF)
    }
    const findCPF = clients.find(client => client.name === name && client.CPF === CPF)
    if (!findCPF) {
      statusCode = 409
      throw new Error("CPF não encontrado.");
    }
    if (findCPF.accountBalance < value) {
      statusCode = 403
      throw new Error("Saldo Insuficiente.");
    }
    if (!nameReciever || !CPFReciever || !value) {
      statusCode = 422
      throw new Error("Campos 'nameReciever', 'CPFReciever' e 'value' Obrigatórios.")
    }
    if (typeof nameReciever !== "string") {
      statusCode = 422
      throw new Error("Campo 'name' deve ser do tipo STRING.");
    }
    if (typeof CPFReciever !== "string") {
      statusCode = 422
      throw new Error("Campo 'CPF' deve ser do tipo STRING.");
    }
    if (CPFReciever.length !== 11) {
      statusCode = 422
      throw new Error("Digite o cpf no seguinte formato: (12345678910)");
    } else {
      CPFReciever = replaceCPF(CPFReciever)
    }
    const findCPFReciever = clients.find(client => client.CPF === CPFReciever)
    if (!findCPFReciever) {
      statusCode = 409
      throw new Error("CPF do destinatário não encontrado.");
    }
    if (!value) {
      statusCode = 422
      throw new Error("Campo 'value' deve ser maior que 0.");
    }
    if (typeof value !== "number") {
      statusCode = 422
      throw new Error("Campo 'value' deve ser do tipo NUMBER.");
    }
    const { currDay, currMonth, currYear } = currDate()
    const date = (currDay + "/" + currMonth + "/" + currYear).toString()
    findCPF.statement?.push({value: -value, date, description: DESCRIPTION.TRANSFER})
    findCPFReciever.statement?.push({value: +value, date, description: DESCRIPTION.TRANSFER})
    res.status(200).send({message: `Valor 'R$ ${value.toFixed(2)}', transferido para o cpf ${CPFReciever}`})
  } catch ( error: any ) {
    res.status(statusCode).send({message: error.message})
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
