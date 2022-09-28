// Init File
const express = require('express');
const { allProductInfo, createProduct, productView, productUpdate, productDelete } = require('../controllers/productController');
const { multerProductStorage } = require('../utility/storageDisk');

// Create Router
const productRouter = express.Router();


// Routes
productRouter.route('/').get(allProductInfo).post(multerProductStorage(), createProduct);
productRouter.route('/:slug').get(productView).put(multerProductStorage(), productUpdate).delete(productDelete);


// Exports Module
module.exports = productRouter;