// Init File
const express = require('express');
const { allCustomerInfo, createCustomer, customerView, customerUpdate, customerDelete } = require('../controllers/customersControllers');
const { multerCustomerStorage } = require('../utility/storageDisk');

// Create Router
const customerRouter = express.Router();


// Routes
customerRouter.route('/').get(allCustomerInfo).post(multerCustomerStorage(), createCustomer);
customerRouter.route('/:id').get(customerView).put(multerCustomerStorage(), customerUpdate).delete(customerDelete);


// Exports Module
module.exports = customerRouter;
