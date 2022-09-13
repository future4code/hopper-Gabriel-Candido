import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req: Request, res: Response) => {
  let statusCode = 400
    try {
      const {name, nickname, email} = req.body;
      if(!name || !nickname || !email){
        statusCode = 422
        throw new Error("O campo 'name', 'nickname', e 'email' são obrigatórios!");
      }
      if (typeof name !== 'string' || typeof nickname !== 'string' || typeof email !== 'string') {
        statusCode = 422;
        throw new Error("Campos 'name', 'nickname' e 'email' devem ser do tipo STRING.");
      };
      const regex = /\S+@\S+\.\S+/;
      if (!regex.test(email)) {
        statusCode = 422;
        throw new Error("Digite o email da seguinte maneira (email@email.com)");
      };
      const user = await connection("TodoListUser")
      .select("email")
      .where({ email });
      if (user.length) {
        statusCode = 409;
        throw new Error("Email já existente");
      };

      await connection("TodoListUser").insert({"id": Date.now(), name, nickname, email});
      res.status(201).send({message:"Usuário criado com sucesso!"});
  } catch (error: any) {
    res.status(statusCode).send({message: error.message});
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { id } = req.params;

    const user = await connection("TodoListUser")
    .select("id", "nickname")
    .where({ id });

    if(!user.length){
      statusCode = 404;
      throw new Error("Usuário não encontrado");
    }

    res.status(200).send(user)
  } catch (error: any) {
    res.status(statusCode).send({message: error.message});
  }
})

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { id } = req.params;
    const {name, nickname} = req.body;

    const user = await connection("TodoListUser")
    .select("id", "nickname")
    .where({ id });

    if(!user.length){
      statusCode = 404;
      throw new Error("Usuário não encontrado");
    }

    if(!name && !nickname){
      statusCode = 422;
      throw new Error("No mínimo uma propriedade deve ser preenchida.");
    }

    if(name){
      await connection("TodoListUser")
      .update({name})
      .where({id});
    };

    if(nickname){
      await connection("TodoListUser")
      .update({nickname})
      .where({id});
    };

    res.status(200).send({message: "Usuário atualizado."})
  } catch (error: any) {
    res.status(statusCode).send({message: error.message});
  };
});

app.post("/task", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const {title, description, limitDate, creatorUserId} = req.body;
    const idTask = await connection("TodoListTask").select()

    if(!title || !description || !limitDate || !creatorUserId){
      statusCode = 422;
      throw new Error("Campos obrigatórios faltando.");
    }

    await connection("TodoListTask")
    .insert({
      "id": (Number(idTask.length) + 1).toString(),
      title,
      description,
      "limit_date": limitDate.split("/").reverse().join("-"),
      "creator_user_id": creatorUserId
    })

    res.status(201).send({message: "Tarefa criada com sucesso"})

  } catch (error: any) {
    res.status(statusCode).send({message: error.message});
  }
})

app.get("/task/:id", async (req: Request, res: Response) => {
  let statusCode = 400
  try {
    const { id } = req.params

    if(!id){
      statusCode = 422
      throw new Error("Id obrigatório.");
    }

    const task = await connection
    .select()
    .from("TodoListTask as TLT")
    .join("TodoListUser as TLU", "TLT.creator_user_id", "TLU.id")
    .where("TLT.id", id)

    if(!task.length){
      statusCode = 404
      throw new Error("Tarefa não encontrada")
    } 
    res.status(200).send(task)
  } catch (error: any) {
    res.status(statusCode).send({message: error.message});
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

export default app;
