require("dotenv").config();

export const config = {
  host: process.env.ENDPOINT,
  port: "3306",
  database: "tasksdb",
  user: "admin",
  password: process.env.PASSWORD,
};
