import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    // ssl: {
    //     require: true,
    // }
})

const testaConnection = async () => {
    try {
        await pool.connect();
        console.log("✅ Conexão com o banco de dados realizada com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao conectar ao banco de dados:", error);
    }
}

export { pool, testaConnection };