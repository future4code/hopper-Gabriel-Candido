import connection from "../dataBase/connection";

const usersOrder = async (order: string): Promise<any> => {
  const result = await connection("aula48_exercicio")
  .select("id", "name", "email", "type")
  .orderBy(order, "ASC")

  return result;
};

export default usersOrder;