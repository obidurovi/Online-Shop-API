// init Fs
const { getTagDb, updateTagDb } = require('../utility/fileSync');
const getSlug = require('../utility/getSlug');
const getRandomId = require('../utility/randomID')

/**
 * @desc get All Tag
 * @name GET api/v1/tag
 * @access public
 */
const getAllTag = (req, res) => {
    // all tag db
    const tag = getTagDb();

    // Send Customer data
    res.status(200).json(tag);
}


/**
 * @desc Create Tag
 * @name POST api/v1/tag
 * @access public
 */
// Create Customer Info
const createTag = (req, res) => {
    const tag = getTagDb();

    tag.push({
        id :getRandomId(),
        ...req.body,
        slug : getSlug(req.body.name)
    });

    // Condition
    if ( !req.params ) {
        res.status(400).json({
            "status" : false,
            "message" : "Invalid Tag Data!"
        });
    }else {
        // Data Update
        updateTagDb(tag);
        res.status(201).json({
            "status" : true,
            "message" : "Tag Created Successfully"
        });
    }

    
}

/**
 * @desc Tag Update Data
 * @name PUT api/v1/customers/slug
 * @access public
 */
 const tagUpdate = (req, res) => {
    const tag = getTagDb();

    // Get slug
    const { slug } = req.params;

    const index = tag.findIndex(data => data.slug == slug);

    // Validation
    if ( tag.some(data => data.slug == slug )) {
        // Update Data
        tag[index] = {
            ...tag[index],
            ...req.body
        }
        // Data Update
        updateTagDb(tag);
        res.status(200).json({
            "status" : true,
            "message" : " Tag Updated Successfully"
        });
    }else {
        res.status(404).json({
            "status" : false,
            "message" : "Tag Not Found!"
        });
    }
}

/**
 * @desc Tag Delete Data
 * @name Delete api/v1/customers/:id
 * @access public
 */
 const tagDelete = (req, res) => {
    const tag = getTagDb();

    // Get id
    const { slug } = req.params;

    const allData = tag.filter(data => data.slug != slug);

    // Validation
    if ( tag.some(data => data.slug == slug) ) {
        // Data Update
        updateTagDb(allData);
        res.status(201).json({
            "status" : true,
            "message" : "Tag Deleted Successfully"
        })
    }else {
        res.status(404).json({
            "status" : false,
            "message" : "Tag Not Found!"
        }); 
    }
}

// Exports Controller
module.exports = {
    getAllTag,
    createTag,
    tagUpdate,
    tagDelete

}