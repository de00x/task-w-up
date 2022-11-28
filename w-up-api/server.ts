import * as cors from "cors";
import * as express from "express";
import * as bodyParser from "body-parser";
import { config } from "./config/config";
import Router from "./routes";

import { createNewTodo } from "./controller/post";
import { editingTodos } from "./controller/put";

const fileUpload = require("express-fileupload");

export class App {
  private static _instance: App;
  private _app: express.Application;
  private readonly _port: number;

  private constructor(port: number = config.port) {
    this._app = express();
    this._port = port;

    this._app.use(cors());
    this._app.use(express.static(config.publickDir));
    this._app.use(express.urlencoded());

    this._app.use("/", Router);
    this.setMiddleware();
  }

  public static get Instance(): App {
    return this._instance || (this._instance = new this());
  }

  public init() {
    this._app.listen(this._port, () => {
      console.log(`This server run on ${this._port}`);
    });
  }
  _;
  private setMiddleware() {
    this._app.use(bodyParser.text());
    this._app.use(bodyParser.urlencoded({ extended: true }));
    this._app.use(bodyParser.json());
    this._app.use(
      fileUpload({
        createParentPath: true,
      })
    );
    this._app.post("/upload", async (req: any, res: any) => {
      createNewTodo(req, res);
    });
    this._app.put("/editing-todos", async (req: any, res: any) => {
      editingTodos(req, res);
    });
  }
}

const app = App.Instance;
app.init();
