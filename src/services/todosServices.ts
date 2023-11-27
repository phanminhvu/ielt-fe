import TodoModel from "models/todo.model";
import httpService from "./httpServices";
import { GET_TODOS_URL } from "constants/api";
import { ResponseGenerator } from "interfaces";

const FAKE_URL = "https://jsonplaceholder.typicode.com";
class TodosService {
  getTodos(): Promise<ResponseGenerator<TodoModel[]>> {
    return httpService.get(`${FAKE_URL}/posts`);
  }
}

export default new TodosService();
