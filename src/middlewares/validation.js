const { query } = require('express-validator');
import { validationResult } from 'express-validator';

export const validateRecipes = [
  query('i')
    .notEmpty()
    .trim()
    .custom(value => value.split(',').length <= 3)
    .withMessage('must have up to 3 items')
];

export const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(422).json({ errors: errors.array() });
  };
};
