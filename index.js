import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import {connectToDatabase} from './config/connect.js';
import booksRoutes from './routes/books.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
connectToDatabase();


app.use('/books', booksRoutes);
app.use('/orders', ordersRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});