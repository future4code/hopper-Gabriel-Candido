import connection from "../dataBase/connection";

export const selectAllProducts = async(productId: string): Promise<any> => {
  const result = await connection("labecommerce_products")
  .select()
  .where("id", "like", `%${productId}%`)

  return result
}
