import {
  CreateTodoPayload,
  CreateTodoResponse,
} from "@/lib/types/todoCreateType";
import { DynamicActionTypes } from "../../../dynamicActionType";

const createTodoActionType = "createTodo/Action";
const createTodoActionReslovedType = "createTodo/Action/Resploved";
const createTodoActionRejectedType = "createTodo/Action/Rejected";

export function createTodoActionCreator(payload: CreateTodoPayload) {
  return { type: createTodoActionType, payload } as const;
}
createTodoActionCreator.toString = () => createTodoActionType;

export function createTodoActionResolved(content: CreateTodoResponse) {
  return { type: createTodoActionReslovedType, payload: content } as const;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createTodoActionRejected(error: any) {
  return { type: createTodoActionRejectedType, payload: error } as const;
}

type CreateTodoActionTypes = typeof import("./create.action");
export type CreateTodoActionType = DynamicActionTypes<CreateTodoActionTypes>;
