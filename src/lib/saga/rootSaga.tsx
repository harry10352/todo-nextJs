import { fork } from "redux-saga/effects";
import { authSaga } from "./features/auth/auth.saga";

export function* root() {
  yield fork(authSaga);
}
