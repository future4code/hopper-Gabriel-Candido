import {Request, Response} from "express";
import { selectUserPurchase } from "../queryEndpoints/selectUserPurchase";

export const getUserPurchase = async (req: Request, res: Response): Promise<void> => {
  try {
    const user_id = req.params.user_id as string

    const result = await selectUserPurchase(user_id)
    
    if(!result.length){
      res.statusCode = 404
      throw new Error("Compras de usuário não encontrado.");
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}
