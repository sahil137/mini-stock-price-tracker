import Stock from '../models/stock.js';

export const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    return res.json({ stocks });
  } catch (error) {
    res.status(500).json({ error: 'Error in fetching stock price data' });
  }
};
