const { body } = require('express-validator');

const addRecipeValidation = () => {
  return [
    body('recipeName')
      .notEmpty().withMessage('Recipe name must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Event name must be between 8 and 255 characters long'),
      body('ingredients')
      .notEmpty().withMessage('Ingredients must not be empty')
      .isLength({ min: 8, max: 900 }).withMessage('Event name must be between 8 and 900 characters long'),
    body('time')
      .notEmpty().withMessage('Time must not be empty'),
      body('process')
      .notEmpty().withMessage('The process of cooking can not be empty')
      .isLength({ min: 8, max: 2000 }).withMessage('Event name must be between 8 and 2000 characters long'),
  ];
};

module.exports = {
    addRecipeValidation
};
