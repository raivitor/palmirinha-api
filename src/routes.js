import { Router } from 'express';
import recipesRoutes from './endpoints/recipes/routes';

const routes = new Router();

routes.use('/recipes', recipesRoutes);
export default routes;
