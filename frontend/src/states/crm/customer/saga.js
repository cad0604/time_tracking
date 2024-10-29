import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { callApi } from "states/saga";
import { deleteRequest, getRequest } from "utils/axios-client";

function* getCustomer() {
  try {
    const response = yield callApi(() => getRequest("crm/customer"));
    yield put({
      type: actions.FETCH_CUSTOMER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_CUSTOMER_FAILURE });
  }
}

function* deleteCustomer(action) {
  try {
    yield callApi(() => deleteRequest(`crm/customer?id=${action.id}`));
    yield put({
      type: actions.DELETE_CUSTOMER_SUCCESS,
    });
  } catch (error) {
    yield put({ type: actions.DELETE_CUSTOMER_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.FETCH_CUSTOMER, getCustomer)]);
  yield all([takeLatest(actions.DELETE_CUSTOMER, deleteCustomer)]);
}
