import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import users, { ROLES } from "./data";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Ex 1 -
// a) O método HTTP utilizado para pegar todos os usuários, é o método GET.
// b) Indicaria a entidade "/users", que corresponde aos usuários.

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users)
})

// Ex 3 -
// a) QueryParams
// b) Letra B **

app.get("/users/name", (req: Request, res: Response) => {
  let statusCode = 500
  const name = (req.query.name as string).toLowerCase()

  try {
    if (!name) {
      statusCode = 422
      throw new Error("Query 'name' obrigatório.");
    }

    const search = users.filter(user => (user.name).toLowerCase().includes(name))

    // ** Letra B
    if (!search.length) {
      statusCode = 404
      throw new Error("Usuário não encontrado.");
    }

    res.status(200).send(search)

  } catch ( error: any ) {
    res.status(statusCode).send({message: error.message})
  }
})

// Ex 2 -
// a) Passei através do Path Params devido a continuação de caminho e por fazer a busca de usuários específicos.
// b) Sim através de uma validação do type passado comparando com um ENUM.

app.get("/users/:type", (req: Request, res: Response) => {
  let statusCode = 500
  const type = (req.params.type as string).toUpperCase()

  try {
    if (!type) {
      statusCode = 422
      throw new Error("Query 'type', não informado.");
    }

    if(type !== ROLES.NORMAL && type !== ROLES.ADMIN){
      statusCode = 422
      throw new Error("O tipo informado precisa ser 'ADMIN' ou 'NORMAL'.");
    }

    const userType = users.filter( user => user.type === type)

    if(!userType.length){
      statusCode = 404
      throw new Error("Usuário não encontrado");
    }

    res.status(200).send(userType)

  } catch ( error: any) {
    res.status(statusCode).send({message: error.message})
  }
})

// Ex 4 -
// a) Nada, somente o método.
// b) Sim, pois o método PUT é comumente utilizado para edição e adição de recursos.

app.put("/users/:id", (req: Request, res: Response) => {
  let statusCode = 500
  const id = Number(req.params.id)
  const phone = Number(req.body.phone)

  try {
    if (!id || !phone) {
      statusCode = 422
      throw new Error("Parâmetro 'id' e o campo 'phone' necessitam ser preenchidos.")
    }
    const findUser = users.find(user => user.id === id)
    if (!findUser) {
      statusCode = 404
      throw new Error("Usuário não encontrado.")
    }
    users.forEach(user => {
      if(user.id === id){
        return user.phone = phone
      }
    })
    res.status(200).send(users)
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
