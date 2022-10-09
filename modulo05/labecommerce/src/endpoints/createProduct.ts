import { Request, Response } from "express";
import connection from "../dataBase/connection";

export const createProduct = async(req: Request, res: Response): Promise<void> => {
  try {
    let { name, price, image_url } = req.body;

    if (!name || !price || !image_url) {
      res.statusCode = 422;
      throw new Error("Campos obrigatórios faltando.");
    };

    if (typeof name !== "string" || typeof image_url !== "string") {
      res.statusCode = 422;
      throw new Error("Os campos 'name' e 'image_url' devem ser do tipo STRING.");
    }

    if (typeof price !== "number") {
      res.statusCode = 422
      throw new Error("O campo 'price' deve ser do tipo NUMBER.");
    }

    await connection("labecommerce_products")
    .insert({id: Date.now(), name, price, image_url})

    res.status(200).send("Produto cadastrado com sucesso!")
  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}
