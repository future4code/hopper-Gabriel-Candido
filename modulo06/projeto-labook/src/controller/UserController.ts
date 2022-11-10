import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../model/UserDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { name, email, password } = req.body

      const input: UserDTO = {
        name,
        email,
        password
      }

      const userBusiness = new UserBusiness()
      await userBusiness.create(input)

      res.status(201).send({message: "Usuário criado com sucesso!"})
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
