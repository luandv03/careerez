import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export const db_config = {
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
};
