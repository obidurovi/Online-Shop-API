// Init File
const express = require('express');
const { allCategoryInfo, createCategory, categoryUpdate, categoryDelete } = require('../controllers/categoryControllers');
const { multerCategoryStorage } = require('../utility/storageDisk');

// Create Router
const categoryRouter = express.Router();


// Routes
categoryRouter.route('/').get(allCategoryInfo).post(multerCategoryStorage(), createCategory);
categoryRouter.route('/:id').put(multerCategoryStorage(), categoryUpdate).delete(categoryDelete);


// Exports Module
module.exports = categoryRouter;
