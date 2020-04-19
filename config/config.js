const mongoose = require('mongoose');
const PRODUCT_DATA = require('../productsData');
const Product = require('../models/Product');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb://127.0.0.1:27017/kabra-assignment',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    const count = await Product.estimatedDocumentCount();
    if (count <= 0) {
      Product.insertMany(PRODUCT_DATA, (err, product) => {
        if (err) {
          console.log(err);
        }
      });
    }
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
