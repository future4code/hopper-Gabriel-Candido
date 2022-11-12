import { CustomError } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async ( user: user ) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUser = async ( email: string ) => {
    try {
      const data = await UserDatabase.connection
      .select()
      .where({email})
      .into("Auth_users");

      return data[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public getUserById = async ( id: string ) => {
    try {
      const data = await UserDatabase.connection
      .select("email", "password")
      .where({id})
      .into("Auth_users");

      return data[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}
