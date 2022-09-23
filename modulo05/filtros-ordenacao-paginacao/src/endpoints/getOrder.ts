import { Request, Response } from "express"
import usersOrder from "../queryEndpoint/usersOrder"

export const getOrder = async(req: Request,res: Response): Promise<void> =>{
  try {
    let order = req.query.order as string
    if(!order && order.toLowerCase() !== "name" && order.toLowerCase() !== "type"){
      order = "email"
    }

    const users = await usersOrder(order)

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
