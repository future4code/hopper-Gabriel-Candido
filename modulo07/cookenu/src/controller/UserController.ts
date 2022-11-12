import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";

export class UserController {

  public signup = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: UserInputDTO = {
        email,
        password,
      };
      
      const userBusiness = new UserBusiness()
      const token  = await userBusiness.singup(input);

      res.status(201).send({ token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
  
  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: UserInputDTO = {
        email,
        password,
      };

      const userBusiness = new UserBusiness()
      const token = await userBusiness.login(input);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public getUser = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string

      const userBusiness = new UserBusiness()
      const userInfo = await userBusiness.getUser(token);

      res.status(200).send({userInfo})
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

}
