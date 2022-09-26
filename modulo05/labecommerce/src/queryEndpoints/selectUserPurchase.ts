import connection from "../dataBase/connection";

export const selectUserPurchase = async(userId: string): Promise<any> => {
  const result = await connection("labecommerce_purchases")
  .select()
  .where("user_id", "like", `%${userId}%`)

  return result
}
