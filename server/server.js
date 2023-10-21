import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './config/mongoose.js';
import routes from './routes/index.js';
dotenv.config();

const app = express();

// connect to mongodb
dbConnection();

app.use(express.json({ limit: '30mb' }));
app.use(cors());

// Api Route to get stock data
app.use('/', routes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server Running on PORT :: ${PORT} 🚀`);
});
