import connection from "../dataBase/connection";

const selectAllUsersByPage = async (page: number): Promise<any> => {
  const limit = 5
  const offset = limit * (page - 1)
  const result = await connection("aula48_exercicio")
  .select("id", "name", "email", "type")
  .limit(limit)
  .offset(offset)

  return result;
};

export default selectAllUsersByPage;