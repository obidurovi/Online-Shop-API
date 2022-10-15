// Init File
const express = require('express');
const { allCustomerInfo, createCustomer, customerView, customerUpdate, customerDelete } = require('../controllers/customersControllers');
const { multerCustomerStorage } = require('../utility/storageDisk');

// Create Router
const customerRoute = express.Router();


// Routes
customerRoute.route('/').get(allCustomerInfo).post(multerCustomerStorage(), createCustomer);
customerRoute.route('/:id').get(customerView).put(multerCustomerStorage(), customerUpdate).delete(customerDelete);


// Exports Module
module.exports = customerRoute;
