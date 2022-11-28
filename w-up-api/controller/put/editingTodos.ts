import { DbModel } from "../../db/connect";
// import * as Formidable from "formidable";
import { v4 } from "uuid";

export const editingTodos = async (req: any, res: any) => {
  // const form = new Formidable.IncomingForm();

  if (req.files) {
    if (req.files.file) {
      const file = req.files.file;
      const newFileName = v4();
      const callback = await DbModel.editingTodos(req.body.id, "todos", {
        date: req.body.date,
        filePath: newFileName,
        header: req.body.header,
        description: req.body.description,
      });
      file.mv(
        `${__dirname}/../../../task-w-up/public/uploads/${newFileName}`,
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          if (callback) {
            res.json("File editing");
          } else res.status(400).json({ msg: "File editing error" });
        }
      );
    } else {
      const callback = await DbModel.editingTodos(req.body.id, "todos", {
        date: req.body.date,
        header: req.body.header,
        description: req.body.description,
      });
      if (callback) {
        res.json("File editing error");
      } else res.status(400).json({ msg: "File editing error" });
    }
  } else {
    const callback = await DbModel.editingTodos(req.body.id, "todos", {
      date: req.body.date,
      header: req.body.header,
      description: req.body.description,
    });
    if (callback) {
      res.json("File editing error");
    } else res.status(400).json({ msg: "File editing error" });
  }

  // form.parse(req, async (err, fields: any) => {
  //   const id = fields.id;
  //   const edited = await DbModel.editingTodos(id, "todos", {
  //     header: fields.header,
  //     description: fields.description,
  //     date: fields.date ? fields.date : null,
  //   });
  //   if (edited) {
  //     res.json({ successEdited: true });
  //   } else {
  //     res.json({ successEdited: false });
  //   }
  // });
};
