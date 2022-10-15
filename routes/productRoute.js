// Init File
const express = require('express');
const { allProductInfo, createProduct, productView, productUpdate, productDelete } = require('../controllers/productController');
const { multerProductStorage } = require('../utility/storageDisk');

// Create Router
const productRoute = express.Router();


// Routes
productRoute.route('/').get(allProductInfo).post(multerProductStorage(), createProduct);
productRoute.route('/:slug').get(productView);
productRoute.route('/:id').get(productView).put(multerProductStorage(),productUpdate).delete(productDelete);



// Exports Module
module.exports = productRoute;