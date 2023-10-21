import express from 'express';
import stocks from './stocks.js';
const router = express.Router();

router.use('/stocks', stocks);

export default router;
