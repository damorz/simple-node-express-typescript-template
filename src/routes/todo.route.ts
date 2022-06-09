import { Router } from 'express';
import TodoController from '../controllers/todo.controller';

const router = Router();

router.get('/all', TodoController.getTodos);

export default router;
