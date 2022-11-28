import { editCompleted, editingTodos, editingTodoFile } from "./put";
import { createNewTodo } from "./post";
import { deleteTask } from "./delete";
import { getAllTodos } from "./get";

export const Controller = {
  get: {
    getAllTodos,
  },
  delete: {
    deleteTask,
  },
  put: {
    editingTodoFile,
    editCompleted,
    editingTodos,
  },
  post: {
    createNewTodo,
  },
};
