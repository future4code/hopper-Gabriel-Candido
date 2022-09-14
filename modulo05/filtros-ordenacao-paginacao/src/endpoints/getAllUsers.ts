import { Request, Response } from "express"
import selectAllUsers from "../queryEndpoint/selectAllUsers"
import selectUser from "../queryEndpoint/selectUser"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
    const name:string = req.query.name as string
    if(name) {
      const user = await selectUser(name)
      if(!user.length){
        res.statusCode = 404
        throw new Error("No recipes found")
      }
      res.status(200).send(user)
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
