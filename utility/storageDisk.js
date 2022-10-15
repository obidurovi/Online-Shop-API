// Multer Init 
const multer = require('multer');
const path = require('path');
const randomString = require('randomstring');

// Customer Storage
const multerCustomerStorage = () => {

    // Multer Config
    const customerStorage = multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, path.join(__dirname, '../public/customer'));
        },
        filename : (req, file, cb) => {
            cb(null, randomString.generate(7) + "_" + randomString.generate({
                length: 12,
                charset: 'alphabetic'
            }) + file.originalname)
        }
    });

    const customerMulter = multer({
        storage : customerStorage
    }).single('profile_pic');

    // return multer
    return customerMulter;

}

// Category Storage
const multerCategoryStorage = () => {

    // Multer Config
    const categoryStorage = multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, path.join(__dirname, '../public/category'));
        },
        filename : (req, file, cb) => {
            cb(null, randomString.generate(7) + "_" + randomString.generate({
                length: 12,
                charset: 'alphabetic'
            }) + file.originalname)
        }
    });

    const categoryMulter = multer({
        storage : categoryStorage
    }).single('category_pic');

    // return multer
    return categoryMulter;

}
// Category Storage
const multerProductStorage = () => {

    // Multer Config
    const productStorage = multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, path.join(__dirname, '../public/product'));
        },
        filename : (req, file, cb) => {
            cb(null, randomString.generate(7) + "_" + randomString.generate({
                length: 12,
                charset: 'alphabetic'
            }) + file.originalname)
        }
    });

    const productMulter = multer({
        storage : productStorage
    }).array('product_pic', 3);

    // return multer
    return productMulter;

}


// Exports Storage
module.exports = {
    multerCustomerStorage,
    multerCategoryStorage,
    multerProductStorage
}