import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import radonRoutes from './routes/radon.routes.js';
const app = express();
app.use(express.json(), cors());
app.use('/api', radonRoutes)
dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);
