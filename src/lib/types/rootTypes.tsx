import { AuthState } from "./auth.login";
import { CreateTodoState } from "./todoCreateType";
import { ListTodoState } from "./todoListType";

export interface AuthRoot {
  authState: AuthState;
}

export interface DefaultTodoState {
  createTodoState: CreateTodoState;
  listTodoState: ListTodoState;
}
