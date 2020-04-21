const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;
const connectDB = require('./config/config');
connectDB();

const users = require('./routes/users');
const products = require('./routes/products');
const cart = require('./routes/cart');

const auth = require('./auth');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

app.use('/users', users);
app.use('/products', auth, products);
app.use('/cart', auth, cart);

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
