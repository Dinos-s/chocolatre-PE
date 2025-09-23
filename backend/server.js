import express from 'express';
import cors from 'cors';
import routes from './routes/trufasRoutes.js';

const app = express();

routes(app)

app.listen(3000, () =>{
    console.log("Serve online...");
})