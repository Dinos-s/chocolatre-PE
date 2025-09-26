import { pool } from "../config/db.js";

export async function allTrufas() {
    const result = await pool.query('SELECT sabor, quantidade, data_adicionado FROM trufas ORDER BY id DESC');
    return result.rows;
}

export const newTrufa = async (sabor, quantidade) => {
    const res = await pool.query(
        "INSERT INTO trufas (sabor, quantidade) VALUES ($1, $2)", 
        [sabor, quantidade]
    );
    return res.rows[0];
}