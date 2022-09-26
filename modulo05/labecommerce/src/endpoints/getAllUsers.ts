import { Request, Response } from "express";
import { selectAllUsers } from "../queryEndpoints/selectAllUsers";

export const getAllUsers = async(req: Request, res: Response): Promise<void> => {
  try {
    const result = await selectAllUsers()

    if(!result.length){
      res.statusCode = 404
      throw new Error("Não há usuários cadastrados ainda.");
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}
