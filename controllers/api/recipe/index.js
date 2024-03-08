// import specific service class
const recipe_service = require('../../../services/recipe/')

// mention the service's needed actions (methods)
const recipe_controller = {
    getAll(req, res) {
        res.json(recipe_service.getAll())
    }
}

module.exports = recipe_controller
