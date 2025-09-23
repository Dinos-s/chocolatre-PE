import express from 'express';
import { allTrufas } from '../controllers/trufasController.js';

const routes = (app) => {
    app.use(express.json());

    app.get('/', allTrufas);
}

export default  routes