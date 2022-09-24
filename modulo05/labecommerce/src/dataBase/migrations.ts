import connection from "./connection";

const createTables = async () => {
  try {
    await connection.raw(`
      CREATE TABLE IF NOT EXISTS labecommerce_users(
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(30) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labecommerce_products(
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(8, 2) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labecomerce_purchases(
        id VARCHAR(100) PRIMARY KEY,
        user_id VARCHAR(100) PRIMARY KEY,
        product_id VARCHAR(100) PRIMARY KEY,
        quatity INT NOT NULL,
        total_price DECIMAL(8, 2) NOT NULL
        FOREIGN KEY(user_id) REFERENCES labecommerce_users(id)
        FOREIGN KEY(product_id) REFERENCES labecommerce_products(id)
      )
    `);
  } catch (error: any) {
    console.log("Erro ao criar tabela.");
    console.log(error.sqlMessage);
  };
};

const create = createTables()
.then(() => console.log("Tabelas criadas com sucesso."))
.finally(() => process.exit());

export default create;
