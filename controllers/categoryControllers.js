const { getCategoryDb, UpdateCategoryDb, updateCategoryDb } = require("../utility/fileSync");
const  getRandomId  = require("../utility/randomID");
const  getSlug  = require("../utility/getSlug");

/**
 * @desc All Category Info
 * @name GET api/v1/category
 * @access public
 */
// All Category Info
const allCategoryInfo = (req, res) => {

    const category = getCategoryDb();
    res.status(200).json(category);
}

/**
 * @desc Creat Category 
 * @name GET api/v1/category
 * @access public
 */
// Create Customer Info
const createCategory = (req, res) => {
    const category = getCategoryDb();

    category.push({
        id :getRandomId(),
        ...req.body,
        slug : getSlug(req.body.name),
        category_pic : req.file ? req.file.originalname : "https://i.ibb.co/6JqkMxg/download.png"
    });

    // Condition
    if ( !req.params ) {
        res.status(400).json({
            "status" : false,
            "message" : "Invalid Category Data!"
        });
    }else {
        
        // Data Update
        // UpdateCategoryDb(category);
        updateCategoryDb(category);
        res.status(201).json({
            "status" : true,
            "message" : "Category Created Successfully"
        });
    }

    
}

/**
 * @desc Customer Update Data
 * @name PUT api/v1/customers/id
 * @access public
 */
 const categoryUpdate = (req, res) => {
    const category = getCategoryDb();

    // Get index
    const { slug } = req.params;

    const index = category.findIndex(data => data.slug == slug);

    // Validation
    if ( category.some(data => data.slug == slug )) {
        // Update Data
        category[index] = {
            ...category[index],
            ...req.body,
            category_pic : req.file ? req.file.originalname : category[index]?.profile_pic
        }
        // Data Update
        updateCategoryDb(category);
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
 const categoryDelete = (req, res) => {
    const category = getCategoryDb();

    // Get id
    const { slug } = req.params;

    const allData = category.filter(data => data.slug != slug);

    // Validation
    if ( category.some(data => data.slug == slug) ) {
        // Data Update
        updateCategoryDb(allData);
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

// Export Controller
module.exports = {
    allCategoryInfo,
    createCategory,
    categoryUpdate,
    categoryDelete
}