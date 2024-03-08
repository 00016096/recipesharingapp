const express = require('express')
const recipe_router = require('./recipe')

const router = express.Router()

// registering child routers
router.use('/recipe', recipe_router)

//exporting routers to the module
module.exports = router
