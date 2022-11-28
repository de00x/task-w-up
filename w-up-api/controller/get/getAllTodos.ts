import { Request, Response } from "express";
import { DbModel } from "../../db/connect";

export const getAllTodos = async (req: Request, res: Response) => {
  const todos = await DbModel.getAllTodos();
  if (todos) {
    res.json(todos);
  } else res.json({ success: false });
};
