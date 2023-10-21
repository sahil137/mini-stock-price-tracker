import mongoose from 'mongoose';
import Stock from '../models/stock.js';

const initialStockData = [
  { symbol: 'REL', price: 242.62 },
  { symbol: 'TCS', price: 3420.12 },
  { symbol: 'INFY', price: 1450.68 },
  { symbol: 'AAPL', price: 150.32 },
  { symbol: 'GOOGL', price: 2789.12 },
  { symbol: 'MSFT', price: 301.9 },
  { symbol: 'AMZN', price: 3500.0 },
  { symbol: 'TSLA', price: 750.25 },
  { symbol: 'NVDA', price: 325.5 },
  { symbol: 'FB', price: 340.67 },
  { symbol: 'AMD', price: 109.84 },
  { symbol: 'GOOG', price: 2767.23 },
  { symbol: 'NFLX', price: 600.55 },
];

mongoose.connect('mongodb://localhost/stocks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function addMockData() {
  try {
    const insertedStocks = await Stock.create(initialStockData);
    console.log('Sample data has been added to the database:', insertedStocks);
  } catch (error) {
    console.error('Error adding stocks:', error);
  } finally {
    mongoose.connection.close();
  }
}

addMockData();
