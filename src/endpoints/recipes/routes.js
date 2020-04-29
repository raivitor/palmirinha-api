import { Router } from 'express';
import controller from './controller';
import { validate, validateRecipes } from '../../middlewares/validation';
const router = Router();

router.get('/', validate(validateRecipes), controller.getRecipes);

export default router;
