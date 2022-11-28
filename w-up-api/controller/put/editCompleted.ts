import { Request, Response } from "express";
import { DbModel } from "../../db/connect";
import * as Formidable from "formidable";

export const editCompleted = async (req: Request, res: Response) => {
  const form = new Formidable.IncomingForm();
  form.parse(req, async (err, fields: any) => {
    const id = fields.id;
    const edited = await DbModel.editCompleted(id, "todos", {
      isCompleted: !fields.isCompleted ? true : false,
    });
    if (edited) {
      res.json({ successEdited: true });
    } else {
      res.json({ successEdited: false });
    }
  });
};
