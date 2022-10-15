// Init Package
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const customerRoute = require('./routes/customersRoute');
const tagRouter = require('./routes/tagRoute');
const categoryRouter = require('./routes/categoryRoute');
const productRouter = require('./routes/productRoute');
const brandRouter = require('./routes/brandRoute');
const cors = require('cors');

// Environment Config
dotenv.config();
const PORT = process.env.PORT || 4000

// Init Express 
const app = express();

// Data Manage
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(cors());

// Static Folder
app.use(express.static('public'));

// Init API
app.use('/api/v1/customers', customerRoute);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/tag', tagRouter);
app.use('/api/v1/brand', brandRouter);


// Create Server
app.listen(PORT, () => {
    console.log(`Server Is Running On PORT ${PORT}`.green);
});
