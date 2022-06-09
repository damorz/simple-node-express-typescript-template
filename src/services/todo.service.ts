import { Todo } from '../@types/todo.type';

export const TodoService = {
  getTodos: async (): Promise<Array<Todo>> => {
    return [
      {
        title: 'clean bathroom.',
        content: 'I must clean my bathroom!',
        createDate: new Date(),
      },
      {
        title: 'complete my homework,',
        content: 'page 864 science homeworl',
        createDate: new Date(),
      },
    ];
  },
};
