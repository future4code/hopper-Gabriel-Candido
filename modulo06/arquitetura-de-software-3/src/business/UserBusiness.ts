import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../Error/CustomError"
import { User } from "../model/User"
import { UserInputDTO } from "../model/UserDTO"
import { generateId } from "../services/generateId"

export class UserBusiness {
  async get():Promise<User[]> {
    const userDatabase = new UserDatabase()
    return await userDatabase.get()
  }

  async create(input: UserInputDTO):Promise<void> {
    try {
      const {email, name, password} = input

      if (!email || !name || !password) {
        throw new CustomError(422, "Dados inválidos (email, name, password)")
      }
  
      const id = generateId()
  
      const userDatabase = new UserDatabase()
      await userDatabase.create({
        id,
        email,
        name,
        password
      })

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage);
    }
  }

}
