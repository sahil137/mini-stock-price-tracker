import express from 'express';
import { getStocks, updateStockPrices } from '../controllers/stock.js';

const router = express.Router();

router.get('/all', getStocks);
router.get('/update-stocks', updateStockPrices);

export default router;
