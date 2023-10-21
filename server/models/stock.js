import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  stockName: String,
  price: Number,
});

const Stock = mongoose.model('Stock', stockSchema);
export default Stock;
