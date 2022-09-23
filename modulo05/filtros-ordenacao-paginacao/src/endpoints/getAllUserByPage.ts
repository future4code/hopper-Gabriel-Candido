import {Request, Response} from "express";
import selectAllUsersByPage from "../queryEndpoint/selectAllUsersByPage";

export const getAllUserByPage = async(req: Request,res: Response): Promise<void> =>{
  try {
    const page: number = Number(req.query.page)
    if(page < 1){
      res.statusCode = 422
      throw new Error("The page needs to be greater than 0")
    }

    const users = await selectAllUsersByPage(page)

    if(!users.length){
      res.statusCode = 404
      throw new Error("No recipes found")
    }

    res.status(200).send(users)
     
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}