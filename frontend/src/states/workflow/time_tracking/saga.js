import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { callApi } from "states/saga";
import { getRequest, postRequest } from "utils/axios-client";

function* gettimeTracking(action) {
  try {
    let url = `workflow/time-trace`;
    if (action.startDate && action.endDate)
      url = url + `?startDate=${action.startDate}&endDate=${action.endDate}`;
    if (action.userId) {
      if (action.startDate) url = url + `&userId=${action.userId}`;
      else url = url + `?userId=${action.userId}`;
    }
    const response = yield callApi(() => getRequest(url));
    yield put({
      type: actions.FETCH_TIME_TRACKING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_TIME_TRACKING_FAILURE });
  }
}

function* addtimeTracking(action) {
  try {
    yield callApi(() => postRequest("workflow/time-trace", action.payload));
    yield put({
      type: actions.ADD_TIME_TRACKING_SUCCESS,
    });
  } catch (error) {
    yield put({ type: actions.ADD_TIME_TRACKING_FAILURE });
  }
}

function* makingXLS(action) {
  try {
    let url = `workflow/time-trace/make-file`;
    if (action.startDate && action.endDate)
      url = url + `?startDate=${action.startDate}&endDate=${action.endDate}`;
    if (action.userId) {
      if (action.startDate) url = url + `&userId=${action.userId}`;
      else url = url + `?userId=${action.userId}`;
    }
    const response = yield callApi(() => getRequest(url));
    yield put({
      type: actions.MAKE_XLS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.MAKE_XLS_FAILURE });
  }
}
export default function* rootSaga() {
  yield all([takeLatest(actions.FETCH_TIME_TRACKING, gettimeTracking)]);
  yield all([takeLatest(actions.MAKE_XLS, makingXLS)]);
  yield all([takeLatest(actions.ADD_TIME_TRACKING, addtimeTracking)]);
}
