import pool from "../config/db.js";

export const allTrufas = async () => {
    const res = await pool.query("SELECT * FROM trufas");
    return res.rows;
}

export const newTrufa = async (sabor, quantidade) => {
    const res = await pool.query(
        "INSERT INTO trufas (sabor, quantidade) VALUES ($1, $2) RETURNING *", 
        [sabor, quantidade]
    );
    return res.rows[0];
}