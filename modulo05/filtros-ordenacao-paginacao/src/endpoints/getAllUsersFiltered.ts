import { Request, Response } from "express"
import selectAllUsers from "../queryEndpoint/selectAllUsers"
import selectType from "../queryEndpoint/selectType"
import selectUser from "../queryEndpoint/selectUser"

export const getAllUsersFiltered = async(req: Request,res: Response): Promise<void> =>{
  try {
    const name = req.query.name as string
    let type = req.query.type as string
    if(name) {
      const user = await selectUser(name)
      if(!user.length){
        res.statusCode = 404
        throw new Error("No recipes found")
      }
      res.status(200).send(user)
    }
    if(type){
      if(type.toLowerCase() !== "teacher" && type.toLowerCase() !== "operations" && type.toLowerCase() !== "cx"){
        type = "Teacher"
      }
  
      const users = await selectType(type)
  
      if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
      }
  
      res.status(200).send(users)
    }
    if(name && type){

    }
    const users = await selectAllUsers()

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