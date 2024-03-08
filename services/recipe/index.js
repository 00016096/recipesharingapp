const fs = require('fs')
// access global mock db file
const recipes = require(global.mock_db)

// write service method implementations
const recipe_service = {
    getAll() {
        return recipes
    }
}

module.exports = recipe_service
