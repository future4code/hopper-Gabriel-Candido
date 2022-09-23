import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

//Ex 01 -

app.get("/users", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { search } = req.query;
    if (search) {
      const user = await connection("Funcionarios")
      .select()
      .where({"name":search});
      if (!user.length) {
        statusCode = 404;
        throw new Error("Funcionário não encontrado.");
      }
      res.status(200).send(user);
    } else {
      const users = await connection("Funcionarios").select();
      res.status(200).send(users);
    }
    
  } catch (error: any) {
    res.status(statusCode).send({message: error.message});
  };
});

//Ex 02 - 

app.post("/users", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const {name, email} = req.body;
    if (!name || !email) {
      statusCode = 422;
      throw new Error("Campos 'name' e 'email' obrigatórios");
    };
    if (typeof name !== 'string' || typeof email !== 'string') {
      statusCode = 422;
      throw new Error("Campos 'name' e 'email' devem ser do tipo STRING.");
    };
    if(name.length < 4) {
      statusCode = 422;
      throw new Error("O nome do usuário deve ter ao menos 4 caracteres.");
    };
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      statusCode = 422;
      throw new Error("Digite o email da seguinte maneira (email@email.com)");
    };
    const user = await connection("Funcionarios")
    .select("email")
    .where({email});
    if (user.length) {
      statusCode = 409;
      throw new Error("Email já existente");
    };

    await connection("Funcionarios").insert({"id": Date.now(), name, email});
    res.status(201).send({message: "Usuário criado com sucesso!"});
  } catch (error: any) {
    res.status(statusCode).send({message: error.message});
  };
});

//Ex 03 -

app.put("/users/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { id } = req.params;
    const { email } = req.body;
    const users = async (select: string, where: any) => {
      const user = await connection("Funcionarios")
      .select(select)
      .where(where);
      return user;
    };
    const findId = await users("id", {id});
    if (!findId.length) {
      statusCode = 404;
      throw new Error("Funcionário não encontrado");
    };
    if (typeof email !== 'string') {
      statusCode = 422;
      throw new Error("Campo 'email' deve ser do tipo STRING.");
    };
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      statusCode = 422;
      throw new Error("Digite o email da seguinte maneira (email@email.com)");
    };
    const findEmail = await users("email", {email});
    if (findEmail.length) {
      statusCode = 409;
      throw new Error("Email já existente");
    }
    await connection("Funcionarios")
    .update({email})
    .where({id});
    res.status(200).send({message: "Email atualizado com sucesso!"});
  } catch (error: any) {
    res.status(statusCode).send({message: error.message});
  }
});

//Ex 04 -

app.delete("/users/:id", async (req: Request, res: Response) => {
  let statusCode = 400
  try {
    const { id } = req.params;
    const user = await connection("Funcionarios")
    .select()
    .where({id});
    if (!user.length) {
      statusCode = 404;
      throw new Error("Funcionário não encontrado");
    }
    await connection("Funcionarios")
    .delete()
    .where({id});
    res.status(200).send({message: "Funcionário deletado com sucesso!"});
  } catch (error: any) {
    res.status(statusCode).send({message: error.message});
  }
});

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});
