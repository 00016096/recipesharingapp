const fs = require('fs')
// access global mock db file
const recipes = require('../../data/mock_db.json')

// write service method implementations
const recipe_service = {
    getAll() {
        return recipes
    }
}

module.exports = recipe_service
