// Init express
const express = require('express');
const { getAllTag, createTag, tagUpdate, tagDelete } = require('../controllers/tagController')

// Create Router
const tagRouter = express.Router();


// Routes
tagRouter.route('/').get(getAllTag).post(createTag);
tagRouter.route('/:slug').put(tagUpdate).delete(tagDelete);


// Exports Module
module.exports = tagRouter;