import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';
import { checkApiKey } from '../middlewares/authMiddleware.js';

const userRoutes = Router();
const userController = new UserController();

userRoutes.use(checkApiKey);

userRoutes.get('/', (req, res) => userController.getUsers(req, res));

export { userRoutes };