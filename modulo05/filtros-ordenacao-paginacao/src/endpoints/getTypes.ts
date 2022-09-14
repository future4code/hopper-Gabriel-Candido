import { Request, Response } from "express"
import selectType from "../queryEndpoint/selectType"

export const getTypes = async(req: Request,res: Response): Promise<void> =>{
  try {
    let type = req.params.type as string
    if(type.toLowerCase() !== "teacher" && type.toLowerCase() !== "operations" && type.toLowerCase() !== "cx"){
      type = "Teacher"
    }

    const users = await selectType(type)

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