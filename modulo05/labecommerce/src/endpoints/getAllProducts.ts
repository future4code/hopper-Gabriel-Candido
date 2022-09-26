import { Request, Response } from "express";
import { selectAllProducts } from "../queryEndpoints/selectAllProducts";

export const getAllProducts = async(req: Request, res: Response): Promise<void> => {
  try {
    const result = await selectAllProducts("%")

    if(!result.length){
      res.statusCode = 404
      throw new Error("Não há produtos cadastrados ainda.");
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}
