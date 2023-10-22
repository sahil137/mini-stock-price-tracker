import Stock from '../models/stock.js';

export const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    return res.json({ stocks });
  } catch (error) {
    res.status(500).json({ error: 'Error in fetching stock price data' });
  }
};

export const updateStockPrices = async (req, res) => {
  try {
    const stocks = await Stock.find();
    stocks.forEach((stock) => {
      const priceChange = parseFloat(((Math.random() - 0.5) * 10).toFixed(2));
      stock.price += priceChange;
    });
    res.json({ stocks });
  } catch (error) {
    res.status(500).json({ error: 'Error in updating stock price' });
  }
};
