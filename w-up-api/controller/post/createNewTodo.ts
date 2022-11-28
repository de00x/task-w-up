import { DbModel } from "../../db/connect";
import { v4 } from "uuid";

export const createNewTodo = async (req: any, res: any) => {
  if (req.files !== null) {
    if (req.files.file !== null) {
      const file = req.files.file;
      const newFileName = v4();
      const callback = await DbModel.createNewTodo({
        id: v4(),
        date: req.body.date,
        filePath: newFileName,
        header: req.body.header,
        description: req.body.description,
      });
      file.mv(
        `${__dirname}/../../../w-up-web/public/uploads/${newFileName}`,
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          if (callback) {
            res.json("File uploaded");
          } else res.status(400).json({ msg: "File uploaded error" });
        }
      );
    } else {
      const callback = await DbModel.createNewTodo({
        id: v4(),
        date: req.body.date,
        header: req.body.header,
        description: req.body.description,
      });
      if (callback) {
        res.json("File uploaded");
      } else res.status(400).json({ msg: "File uploaded error" });
    }
  } else {
    const callback = await DbModel.createNewTodo({
      id: v4(),
      date: req.body.date,
      header: req.body.header,
      description: req.body.description,
    });
    if (callback) {
      res.json("File uploaded");
    } else res.status(400).json({ msg: "File uploaded error" });
  }
};
