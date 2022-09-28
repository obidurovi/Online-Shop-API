// Random Id Generator

const getRandomId = () => {
    // id generate
    return Math.floor(Date.now() * Math.random() * 10000);
    // id return
    
}

// Exports ID
module.exports = getRandomId;