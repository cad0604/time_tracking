import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { callApi } from "states/saga";
import { postRequestNoToken } from "utils/axios-client";

function* signup(action) {
  try {
    const response = yield callApi(() =>
      postRequestNoToken("auth/signup", action.payload)
    );
    yield put({
      type: actions.SIGNUP_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.SIGNUP_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.SIGNUP, signup)]);
}
