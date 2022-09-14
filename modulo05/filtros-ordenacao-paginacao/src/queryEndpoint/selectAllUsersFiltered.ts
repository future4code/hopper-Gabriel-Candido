import connection from "../dataBase/connection"

const selectAllUsersFiltered = async (name: string, type: string, sort: string, order: string, limit: number, page: number): Promise<any> => {
  const offset = limit * (page - 1)
  
  const result = await connection("aula48_exercicio")
  .select("id", "name", "email", "type")
  .where("name", "like", `%${name}%`)
  .andWhere("type", "like", `%${type}%`)
  .orderBy(sort, order)
  .limit(limit)
  .offset(offset)

  return result
}

export default selectAllUsersFiltered;