import { UserDatabase } from "../data/UserDatabase";
import { UserDTO } from "../model/UserDTO";
import { generateId } from "../services/generateId";
import { CustomError } from "../Error/CustomError";

export class UserBusiness {
  async create(input: UserDTO): Promise<void> {
    try {
      let message = "Success!"
      const { name, email, password } = input

      if (!name || !email || !password) {
        message = '"name", "email" and "password" must be provided'
        throw new CustomError(406, message)
      }

      const id: string = generateId()

      const userDatabase = new UserDatabase()
      await userDatabase.create({
        id,
        name,
        email,
        password
      })

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage);
    };
  };
};
