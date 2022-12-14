const { getProductDb, updateProductDb, removePreviousImage } = require("../utility/fileSync");
const  getRandomId  = require("../utility/randomID");
const  getSlug  = require("../utility/getSlug");

/**
 * @desc All Product Info
 * @name GET api/v1/product
 * @access public
 */
// All Customer Info
const allProductInfo = (req, res) => {

    const product = getProductDb();
    res.status(200).json(product);
}

/**
 * @desc Create Product
 * @name PUT api/v1/product
 * @access public
 */
// Create Customer Info
const createProduct = (req, res) => {
    const product = getProductDb();


    // Multiple Image Function
    let multipleIMG = [];

    req.files.forEach(multiple => {
        multipleIMG.push(multiple.filename);
    });

    product.push({
        id :getRandomId(),
        ...req.body,
        slug : getSlug(req.body?.name),
        product_pic : req.files ? multipleIMG : []
    });

    // Condition
    if ( !req.params ) {
        res.status(400).json({
            "status" : false,
            "message" : "Invalid Customer Data!"
        });
    }else {
        // Data Update
        updateProductDb(product);
        res.status(201).json({
            "status" : true,
            "message" : "Customer Profile Created Successfully"
        });
    }

    
}



/**
 * @desc Product Single data View
 * @name GET api/v1/product/slug
 * @access public
 */
 const productView = (req, res) => {
    const product = getProductDb();

    // Get id
    const { slug } = req.params;

    const data = product.find(data => data.slug == slug);

    // Validation
    if ( product.some( data => data.slug == slug )) {
        res.status(200).json(data);
    }else {
        res.status(404).json({
            "status" : false,
            "message" : "Page Not Found!"
        });
    }
}

/**
 * @desc Product Update Data
 * @name PUT api/v1/product/id
 * @access public
 */
 const productUpdate = (req, res) => {
    const product = getProductDb();

    // Get index
    const { id } = req.params;
    
    const previousImage = product.find( data => data.id == id);

    const index = product.findIndex(data => data.id == id);

    // Multiple Image Function
    let multipleIMG = [];

    req.files.forEach(multiple => {
        multipleIMG.push(multiple.filename);
    });
    

    // Validation
    if ( product.some(item => item.id == id )) {
        let test = [];
        if (req.files != "") {
            // Delete PRevious Image
            previousImage?.product_pic?.forEach(del => {
                removePreviousImage(del);
            });

            // Updated Image
            test = multipleIMG;
        }else {
            test = previousImage.product_pic;
        }
        // Update Data Push
        product[index] = {
            ...product[index],
            ...req.body,
            slug : getSlug(req.body?.name),
            product_pic : test
        }
        // Data Update
        updateProductDb(product);
        res.status(200).json({
            "status" : true,
            "message" : " Product Data Updated Successfully"
        });
    }else {
        res.status(404).json({
            "status" : false,
            "message" : "Product Not Found!"
        });
    }
}

/**
 * @desc Product Delete Data
 * @name Delete api/v1/product/id
 * @access public
 */
 const productDelete = (req, res) => {
    const product = getProductDb();

    // Get id
    const { id } = req.params;

    const allData = product.filter(data => data.id != id);

    // Find Delete Data
    const deleteItem = product.find( data => data.id == id);

    // Validation
    if ( product.some(data => data.id == id) ) {

        // Delete PRevious Image
        deleteItem?.product_pic?.forEach(del => {
        removePreviousImage(del);
        });
        // Data Update
        updateProductDb(allData);
        res.status(201).json({
            "status" : true,
            "message" : "Customer Profile Deleted Successfully"
        })
    }else {
        res.status(404).json({
            "status" : false,
            "message" : "Page Not Found!"
        }); 
    }
}

// Exports Controller
module.exports = {
    allProductInfo,
    createProduct,
    productView,
    productUpdate,
    productDelete
}