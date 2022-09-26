import { Request, Response } from "express";
import connection from "../dataBase/connection";

export const createUser = async(req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.statusCode = 422;
      throw new Error("Campos obrigatórios faltando.");
    };

    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
      res.statusCode = 422;
      throw new Error("Todos os campos devem ser do tipo STRING.");
    }

    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      res.statusCode = 422;
      throw new Error("Digite o email da seguinte maneira (email@email.com)");
    };

    await connection("labecommerce_users")
    .insert({id: Date.now(), name, email, password})

    res.status(200).send("Usuário criado com sucesso!")
  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}
