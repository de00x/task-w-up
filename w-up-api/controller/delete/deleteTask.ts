import { Request, Response } from "express";
import { DbModel } from "../../db/connect";
import * as Formidable from "formidable";

export const deleteTask = async (req: Request, res: Response) => {
  const form = new Formidable.IncomingForm();
  form.parse(req, async (err, fields: any) => {
    const currentTodoId = req.query.id;
    const deletedTodo = await DbModel.deleteTask(currentTodoId, "todos");
    if (deletedTodo) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
};
