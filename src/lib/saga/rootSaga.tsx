import { fork } from "redux-saga/effects";
import { authSaga } from "./features/auth/auth.saga";
import { createTodoSaga } from "./features/todo/create/create.saga";
import { listTodoSaga } from "./features/todo/list/list.saga";

export function* root() {
  yield fork(authSaga);
  yield fork(createTodoSaga);
  yield fork(listTodoSaga);
}
