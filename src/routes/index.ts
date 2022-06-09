import { Router, Request, Response } from 'express';
import TodoRoutes from './todo.route';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Node + Express + Typescript Server.');
});

router.get('/health', (req: Request, res: Response) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date(),
  };

  res.status(200).send(data);
});

router.use('/todo', TodoRoutes);

export default router;
