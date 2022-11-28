import { Request, Response } from "express";
import { DbModel } from "../../db/connect";
import * as Formidable from "formidable";

export const editingTodoFile = async (req: Request, res: Response) => {
  const form = new Formidable.IncomingForm();
  form.parse(req, async (err, fields: any) => {
    const edited = await DbModel.editingTodoFile(fields.id, "todos", {
      filePath: null,
    });
    if (edited) {
      res.json({ successEdited: true });
    } else {
      res.json({ successEdited: false });
    }
  });
};
