// Get Slug
const getSlug = (title) => {

    // Return Slug
    return title.toLowerCase().replace(/[^\w-]+/g, '-');
}


// Exports Slug
module.exports = getSlug;