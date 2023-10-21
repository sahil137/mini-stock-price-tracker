import express from 'express';
import { getStocks } from '../controllers/stock.js';

const router = express.Router();

router.get('/get-all', getStocks);

export default router;
