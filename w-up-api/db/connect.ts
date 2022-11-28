import * as FyleSync from "lowdb/adapters/FileSync";
import * as dbInterface from "./interfaces";
import * as lowDb from "lowdb";

const db = lowDb(new FyleSync("./db/db.json"));

export class DbModel {
  /// get ///
  public static async getAllTodos() {
    let result = await db.get("todos").value();
    return result;
  }
  /// get ///

  /// delete ///
  public static async deleteTask(currentTodoId: string, type: string) {
    const deleted = await db.get(type).remove({ id: currentTodoId }).write();
    const isSuccessDeleted = await deleted.find(
      (todoId) => todoId.id === currentTodoId
    );
    if (isSuccessDeleted !== undefined) {
      return true;
    } else false;
  }
  /// delete ///

  /// put ///
  public static async editCompleted(id: string, type: string, data: any) {
    let edited = await db.get(type).find({ id: id }).assign(data).write();
    return edited;
  }

  public static async editingTodoFile(id: string, type: string, data: any) {
    let edited = await db.get(type).find({ id: id }).assign(data).write();
    return edited;
  }

  public static async editingTodos(id: string, type: string, data: any) {
    let edited = await db.get(type).find({ id: id }).assign(data).write();
    return edited;
  }
  /// put ///

  /// post ///
  public static async createNewTodo(data: dbInterface.ITodos) {
    let callback = await db
      .get("todos")
      .push({
        id: data.id,
        isCompleted: false,
        header: data.header,
        description: data.description,
        date: data.date === "" ? null : data.date,
        filePath: data.filePath === undefined ? null : data.filePath,
      })
      .write();
    return callback;
  }
  /// post ///
}
