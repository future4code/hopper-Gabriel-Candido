import connection from "./connection";

const criarTabelas = async () => {
  try {
    await connection.raw(`
      CREATE TABLE IF NOT EXISTS TodoListUser (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NULL,
        nickname VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL
      );
      CREATE TABLE TodoListTask (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        status VARCHAR(255) NOT NULL DEFAULT "to_do",
        limit_date DATE NOT NULL,
        creator_user_id varchar(255) NOT NULL,
        FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
      );
      CREATE TABLE TodoListResponsibleUserTaskRelation (
        task_id VARCHAR(255),
        responsible_user_id VARCHAR(255),
        FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
        FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
      );
    `);
    console.log("Tabela criada com sucesso.");
  } catch (error: any) {
    console.log("Erro ao criar tabela.");
    console.log(error.sqlMessage);
  };
};

criarTabelas()

export default criarTabelas;
