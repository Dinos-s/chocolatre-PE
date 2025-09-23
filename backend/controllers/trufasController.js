import { allTrufas } from '../models/trufasModel.js';

export const allTrufas = (req, res) => {
    res.status(200).json(allTrufas);
}

export const newTrufa = (req, res) => {
    const { sabor, quantidade } = req.body;
}