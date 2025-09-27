import express from 'express';
import { Trufas, novaTrufa } from '../controllers/trufasController.js';

const routes = (app) => {
    app.use(express.json());

    app.get('/', Trufas);

    app.post('/', novaTrufa);
}

export default routes