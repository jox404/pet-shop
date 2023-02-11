import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const db = new Sequelize(
  /*   process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, */
  "petshop",
  "postgres",
  "Bjxr3yEc@",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export default db;
