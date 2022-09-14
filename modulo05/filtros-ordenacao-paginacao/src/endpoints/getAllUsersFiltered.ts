import { Request, Response } from "express"
import selectAllUsersFiltered from "../queryEndpoint/selectAllUsersFiltered"

export const getAllUsersFiltered = async(req: Request,res: Response): Promise<void> =>{
  try {
    let name = req.query.name as string
    let type = req.query.type as string
    let sort = req.query.sort as string
    let order = req.query.order as string
    let limit = Number(req.query.limit)
    let page = Number(req.query.page)

    if(!name){
      name = "%"
    }

    if(!type){
      type = "%"
    }

    if(!sort || sort !== "name" && sort !== "type" && sort !== "id" && sort !== "email"){
      sort = "name"
    }

    if(!order || order !== "asc" && order !== "desc"){
      order = "desc"
    }

    if(!page){
      page = 1
    }

    if(!limit){
      limit = 5
    }

    const noPage = Math.min(limit * (page -1), 1)

    const users = await selectAllUsersFiltered(name, type, sort, order, limit, page)
    
    if(!users.length){
      res.statusCode = 404
      throw new Error("Users not found");
    }
    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}