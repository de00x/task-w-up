import * as express from "express";
import { Controller } from "../controller";

const routes = express.Router();

routes.get("/todos", Controller.get.getAllTodos);

routes.put("/delete-file", Controller.put.editingTodoFile);
routes.put("/completed-task", Controller.put.editCompleted);

routes.delete("/delete-task", Controller.delete.deleteTask);

export default routes;
