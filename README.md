## Online Shop Details Rest API

## How To Work On This APi

 * Customers
    * Create A Customer Profile
        * Customer Name
        * Customer Email
        * Customer Cell Number
        * Customer Location
        * Customer Address Zip Code
        * Customer Shipping Address
        * Customer Billing Address
        * Customer Address
    * All Customer View
    * Single Customer Data View
    * Single Customer Data Update
    * Single Customer Data Delete

* Product
    *Create A Product
        * Product Name
        * Product Slug
        * Product Regular PRice
        * Product Sale Price
        * Product Stock Limit
        * Product Short Description
        * Product Long Description
    * All Product View
    * Single Product Data View
    * Single Product Data Update
    * Single Product Data Delete

* Category
    * Category Product
        * Category Name
        * Category Slug
        * Category Photo
    * Single Category Data Update
    * Single CAtegory Data Delete

* Tag
    * Tag Product
        * Tag Name
        * Tag Slug
    * Single Tag Data Update
    * Single Tag Data Delete

## Usage

If You're want to use this method

```console
npm install
```
## Server Structure

```console 
// Init Package
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const customerRoute = require('./routes/customersRoute');
const tagRouter = require('./routes/tagRoute');
const categoryRouter = require('./routes/categoryRoute');
const productRouter = require('./routes/productRoute');

// Environment Config
dotenv.config();
const PORT = process.env.PORT || 4000

// Init Express 
const app = express();

// Data Manage
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

// Static Folder
app.use(express.static('public'));

// Init API
app.use('/api/v1/customers', customerRoute);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/tag', tagRouter);

// Create Server
app.listen(PORT, () => {
    console.log(`Server Is Running On PORT ${PORT}`.green);
});

```

## Installation Packages
    * Express Js
    * Nodemon
    * dotenv
    * colors
    * multer
    * randomstring

## For Using This API
[Live Project](https://documenter.getpostman.com/view/22689249/2s83mYr62s)