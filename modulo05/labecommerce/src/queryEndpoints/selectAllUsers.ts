import connection from "../dataBase/connection";

export const selectAllUsers = async(): Promise<any> => {
  const result = await connection("labecommerce_users").select()

  return result
}
