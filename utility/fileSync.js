// Init FS
const { readFileSync, writeFileSync, unlinkSync } = require('fs');
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

// Remove Previous Image
const removePreviousImage = (filename) => {

    unlinkSync(path.join(__dirname, `../public/product/${ filename }`))
}

// Remove Category Previous Image
const catePreviousImage = (filename) => {

    unlinkSync(path.join(__dirname, `../public/category/${ filename }`))
}

//get all brand db

const getBrandDb = () =>{

   const brandDb =  JSON.parse(readFileSync(path.join(__dirname , '../Database/brand.json')));

   return brandDb;

}

//update brand db
const updateBrandDb = (obj) =>{

    writeFileSync(path.join(__dirname , '../Database/brand.json') , JSON.stringify(obj));

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
    updateProductDb,
    removePreviousImage,
    catePreviousImage,
    getBrandDb,
    updateBrandDb
}