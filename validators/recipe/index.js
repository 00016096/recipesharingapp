const { body, param } = require('express-validator');
const recipe_service = require('../../services/recipe')

const addRecipeValidation = () => {
  return [
      body('recipeName')
      .notEmpty().withMessage('Recipe name must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Recipe name must be between 8 and 255 characters long'),
      body('ingredients')
      .notEmpty().withMessage('Ingredients must not be empty')
      .isLength({ min: 8, max: 900 }).withMessage('Ingredients must be between 8 and 900 characters long'),
      body('time')
      .notEmpty().withMessage('Time must not be empty'),
      body('process')
      .notEmpty().withMessage('The process of cooking can not be empty')
      .isLength({ min: 8, max: 2000 }).withMessage('Process description must be between 8 and 2000 characters long'),
  ];
};

const deleteRecipeValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await recipe_service.getById(id);
      if (!exists) {
        throw new Error('Recipe not found');
      }
    })
  ];
};

const updateRecipeValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await recipe_service.getById(id);
      if (!exists) {
        throw new Error('Recipe not found');
      }
    }),
    body('recipeName')
      .notEmpty().withMessage('Recipe name must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Recipe name must be between 8 and 255 characters long'),
      body('ingredients')
      .notEmpty().withMessage('Ingredients must not be empty')
      .isLength({ min: 8, max: 900 }).withMessage('Ingredients must be between 8 and 900 characters long'),
      body('time')
      .notEmpty().withMessage('Time must not be empty'),
      body('process')
      .notEmpty().withMessage('The process of cooking can not be empty')
      .isLength({ min: 8, max: 2000 }).withMessage('Process description must be between 8 and 2000 characters long'),
  ];
};



module.exports = {
    addRecipeValidation,
    deleteRecipeValidation,
    updateRecipeValidation
};


