import { Request, Response } from 'express';
import { Todo } from '../@types/todo.type';
import { TodoService } from '../services/todo.service';

const TodoController: any = {
  getTodos: async (req: Request, res: Response) => {
    try {
      const response: Todo[] = await TodoService.getTodos();
      return res.status(200).json({
        status: 200,
        message: null,
        payload: response,
      });
    } catch (err: any) {
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong.',
        payload: null,
      });
    }
  },
};

export default TodoController;
