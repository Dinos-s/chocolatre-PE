import express from 'express';
import cors from 'cors';
import routes from './routes/trufasRoutes.js';
import { testaConnection } from './config/db.js';

const allowedOrigins = [
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'http://localhost:8080',
    'https://dinos-s.github.io/chocolatre-PE/'
];

const app = express();
app.use(cors({
    origin: allowedOrigins,
    credentials: false,
}));
routes(app)

testaConnection()

app.listen(3000, () =>{
    console.log("Serve online...");
})