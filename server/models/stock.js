import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
});

const Stock = mongoose.model('Stock', stockSchema);
export default Stock;
