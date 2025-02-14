import { DynamicActionTypes } from "./dynamicActionType";

type CreateTodoActionTypes =
  typeof import("./feature/todo/create/create.action");
type ListTodoActionTypes = typeof import("./feature/todo/list/list.action");

export type TodoActionType = DynamicActionTypes<
  CreateTodoActionTypes & ListTodoActionTypes
>;
