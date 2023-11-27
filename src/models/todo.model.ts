import { ResponseGenerator } from "interfaces";
import { isArray } from "lodash";

class TodoModel {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;

  constructor(data: TodoModel) {
    this.userId = data?.userId;
    this.id = data?.id;
    this.title = data?.title;
    this.completed = data?.completed;
  }

  static parseTodoListFromResponse(response: ResponseGenerator<TodoModel[]>) {
    if (isArray(response.data)) {
      return response.data.map((el) => {
        const newEl = new TodoModel(el);
        return newEl;
      });
    }

    return [];
  }
}

export default TodoModel;
