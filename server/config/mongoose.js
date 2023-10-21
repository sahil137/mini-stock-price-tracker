import mongoose from 'mongoose';
const dbConnection = () => {
  mongoose
    .connect('mongodb://localhost/stocks')
    .then(() => console.log('Connected to Database :: Mongo DB'))
    .catch((err) => console.log('Error in connecting to DataBase', err));
  mongoose.set('strictQuery', true);
};

export default dbConnection;
