import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { callApi } from "states/saga";
import { getRequest, postRequest } from "utils/axios-client";

function* gettimeStart() {
  try {
    const response = yield callApi(() => getRequest("workflow/time-start"));
    yield put({
      type: actions.FETCH_TIME_START_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_TIME_START_FAILURE });
  }
}

function* addtimeStart(action) {
  try {
    yield callApi(() => postRequest("workflow/time-start", action.payload));
    yield put({
      type: actions.ADD_TIME_START_SUCCESS,
    });
  } catch (error) {
    yield put({ type: actions.ADD_TIME_START_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.FETCH_TIME_START, gettimeStart)]);
  yield all([takeLatest(actions.ADD_TIME_START, addtimeStart)]);
}
