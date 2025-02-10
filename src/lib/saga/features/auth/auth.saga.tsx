import {
  authActionCreator,
  authActionRejected,
  authActionResolved,
} from "@/lib/action/auth.action";
import { call, put, takeEvery } from "redux-saga/effects";
import { authService } from "./auth.service";
import { AuthResponse } from "@/lib/types/auth.login";

export function* authSaga() {
  yield takeEvery(authActionCreator, function* authActionCreatorFn(action) {
    try {
      const result: AuthResponse = yield call(authService, action.payload);
      yield put(authActionResolved(result));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        yield put(authActionRejected(error))
    }
  });
}
