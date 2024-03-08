const express = require('express');

const router = express.Router();
const recipe_controller = require('../../../controllers/api/recipe');

// Define API routes
router.get('/', (req, res)=>{
    recipe_controller.getAll(req, res);
});

module.exports = router;
