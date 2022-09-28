// Init FS
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

// Get All Customer Databse
const getCustomerDb = () => {
    const customerDb = JSON.parse(readFileSync(path.join(__dirname, '../Database/customers.json')));

    return customerDb;
}

// Update Customer DataBase
const updateCustomerDb = (obj) => {
    writeFileSync(path.join(__dirname, '../Database/customers.json'), JSON.stringify(obj));
}

// Get All tag Databse
const getTagDb = () => {
    return JSON.parse(readFileSync(path.join(__dirname, '../Database/tag.json')));

}

// Update tag DataBase
const updateTagDb = (obj) => {
    writeFileSync(path.join(__dirname, '../Database/tag.json'), JSON.stringify(obj));
}

// Get All category Databse
const getCategoryDb = () => {
    return JSON.parse(readFileSync(path.join(__dirname, '../Database/category.json')));

}

// Update category Databse
const updateCategoryDb = (obj) => {
    writeFileSync(path.join(__dirname, '../Database/category.json'), JSON.stringify(obj));

}

// Get All product Databse
const getProductDb = () => {
    return JSON.parse(readFileSync(path.join(__dirname, '../Database/product.json')));

}

// Update category Databse
const updateProductDb = (obj) => {
    writeFileSync(path.join(__dirname, '../Database/product.json'), JSON.stringify(obj));

}

// Data Exports
module.exports = {
    getCustomerDb,
    updateCustomerDb,
    getTagDb,
    updateTagDb,
    getCategoryDb,
    updateCategoryDb,
    getProductDb,
    updateProductDb
}