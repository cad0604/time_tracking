import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { callApi } from "states/saga";
import { postRequestNoToken } from "utils/axios-client";

function* login(action) {
  const yesAdmin = { isAdmin: true };
  const noAdmin = { isAdmin: false };
  let payload = {};

  try {
    const response = yield callApi(() =>
      postRequestNoToken("auth/signin", action.payload)
    );
    if (
      response.data.user.role !== undefined &&
      response.data.user.role !== null &&
      response.data.user.role.name === "Admin"
    )
      payload = { ...response.data.user, ...yesAdmin };
    else payload = { ...response.data.user, ...noAdmin };
    payload = {
      ...payload,
      accessToken: response.data.accessToken,
      planName: response.data.planName,
    };
    localStorage.setItem("user", JSON.stringify(payload));

    yield put({
      type: actions.LOGIN_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    yield put({ type: actions.LOGIN_FAILURE });
  }
}

function* logout() {
  // mockAdapter.onDelete("/logout").reply(200);

  localStorage.removeItem("user");

  try {
    // yield axiosClient.post("/logout");
    yield put({ type: actions.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: actions.LOGOUT_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.LOGIN, login)]);
  yield all([takeLatest(actions.LOGOUT, logout)]);
}
