const { getCustomerDb, updateCustomerDb } = require("../utility/fileSync");
const  getRandomId  = require("../utility/randomID");

// All Customer Info
const allCustomerInfo = (req, res) => {

    const customer = getCustomerDb();
    res.status(200).json(customer);
}

// Create Customer Info
const createCustomer = (req, res) => {
    const customer = getCustomerDb();

    customer.push({
        id :getRandomId(),
        ...req.body,
        profile_pic : req.file ? req.file.originalname : "https://i.ibb.co/6JqkMxg/download.png"
    });

    // Condition
    if ( !req.params ) {
        res.status(400).json({
            "status" : false,
            "message" : "Invalid Customer Data!"
        });
    }else {
        // Data Update
        updateCustomerDb(customer);
        res.status(201).json({
            "status" : true,
            "message" : "Customer Profile Created Successfully"
        });
    }

    
}

/**
 * @desc Customer Single data View
 * @name GET api/v1/customers/id
 * @access public
 */
const customerView = (req, res) => {
    const customer = getCustomerDb();

    // Get id
    const { id } = req.params;

    const data = customer.find(data => data.id == id);

    // Validation
    if ( customer.some( data => data.id == id )) {
        res.status(200).json(data);
    }else {
        res.status(404).json({
            "status" : false,
            "message" : "Page Not Found!"
        });
    }
}

/**
 * @desc Customer Update Data
 * @name PUT api/v1/customers/id
 * @access public
 */
const customerUpdate = (req, res) => {
    const customer = getCustomerDb();

    // Get index
    const { id } = req.params;

    const index = customer.findIndex(data => data.id == id);

    // Validation
    if ( customer.some(data => data.id == id )) {
        // Update Data
        customer[index] = {
            ...customer[index],
            ...req.body,
            profile_pic : req.file ? req.file.originalname : customer[index]?.profile_pic
        }
        // Data Update
        updateCustomerDb(customer);
        res.status(200).json({
            "status" : true,
            "message" : " Customer Data Updated Successfully"
        });
    }else {
        res.status(404).json({
            "status" : false,
            "message" : "Page Not Found!"
        });
    }
}


/**
 * @desc Customer Delete Data
 * @name Delete api/v1/customers/:id
 * @access public
 */
const customerDelete = (req, res) => {
    const customer = getCustomerDb();

    // Get id
    const { id } = req.params;

    const allData = customer.filter(data => data.id != id);

    // Validation
    if ( customer.some(data => data.id == id) ) {
        // Data Update
        updateCustomerDb(allData);
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

// Module Exports
module.exports = {
    allCustomerInfo,
    createCustomer,
    customerView,
    customerUpdate,
    customerDelete

}