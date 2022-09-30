import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labe_Users"

  public async getAllUsers() {
    const result = await BaseDatabase
    .connection(UserDatabase.TABLE_USERS)
    .select()

    return result
  }

  public async createUser(user: User) {
    const result = await BaseDatabase
    .connection(UserDatabase.TABLE_USERS)
    .insert({
      id: user.getId(),
      email: user.getEmail(),
      password: user.getPassword()
  })
    
    return result
  }

  public async getUserById(id: string) {
    const result = await BaseDatabase
    .connection(UserDatabase.TABLE_USERS)
    .select()
    .where({id})

    return result
  }
}

export default UserDatabase;