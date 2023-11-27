import { combineReducers as combineReducersRedux } from "redux";

import { authSagas, authReducer } from "./auth";
import { todoSagas, todoReducer } from "./todos";
import { IeltsReducer } from "./ielts";

const combineSaga = {
  ...authSagas,
  ...todoSagas,
};

const combineReducers = combineReducersRedux({
  authReducer,
  todoReducer,
  IeltsReducer,
});

export { combineSaga, combineReducers };
