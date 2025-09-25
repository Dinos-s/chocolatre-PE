import { allTrufas, newTrufa } from '../models/trufasModel.js';

// Pega todas as trufas do banco de dados
export const Trufas = async (req, res) => {
    const trufas = await allTrufas();
    res.status(200).json(trufas);
}

export const novaTrufa = async(req, res) => {
    const { sabor, quantidade } = req.body;
    try {
        const novaTrufa = await newTrufa(sabor, quantidade);
        res.status(201).json({
            message: "Nova trufa adicionada",
            data: novaTrufa
        });

    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar nova trufa' });
    }
}