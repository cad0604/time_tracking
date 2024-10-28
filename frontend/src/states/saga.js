import { all, call, put } from "redux-saga/effects";
import { notification } from "antd";
import actions from "./auth/login/actions";

import authSaga from "states/auth/login/saga";

import signupSaga from "states/auth/signup/saga";

import crmCustomerSaga from "states/crm/customer/saga";

import workflowTimeStartSaga from "states/workflow/time_start/saga";
import workflowTimeTrackingSaga from "states/workflow/time_tracking/saga";

import utilFileSaga from "states/util/file/saga";
// Here you can include all the saga which you write for components
export default function* rootSaga() {
  yield all([
    authSaga(),
    signupSaga(),
    crmCustomerSaga(),
    workflowTimeStartSaga(),
    workflowTimeTrackingSaga(),
    utilFileSaga(),
  ]);
}

export function* callApi(apiFunction, ...args) {
  try {
    // yield call(() => getCustomRequest('sanctum/csrf-cookie'));
    const response = yield call(apiFunction, ...args);
    handleSuccessfulResponse(response);
    return response.data;
  } catch (error) {
    console.log("testing", error);
    if (error.response.status === 401) yield put({ type: actions.LOGOUT });
    if (error.response.data.error.includes("userId"))
      yield put({ type: actions.LOGOUT });
    handleError(error);
    throw error;
  }
}

function handleSuccessfulResponse(response) {
  if (response.status === 200 && response.data.message) {
    showNotification("success", "Success!", response.data.message);
  }
}

function handleError(error) {
  if (error.response) {
    const errorHandlerMapping = {
      401: () =>
        showNotification("error", "Sin autorización", "no autorizaste"),
      404: () => {
        // const errorMessages = error.response.data.message;
        // showNotification(
        //   'warning',
        //   '404 feil',
        //   `Det er ingen gyldige data. Opprett nye data.`
        // );
      },
      405: () => {
        showNotification(
          "warning",
          "Lo siento!",
          `Por favor introduzca otro DNI!`
        );
      },

      500: () => {
        showNotification(
          "error",
          "Problema del servidor temporal",
          "Actualmente estamos experimentando algunos problemas técnicos. Nuestros ingenieros están trabajando en el problema y esperamos resolverlo pronto. Inténtelo de nuevo más tarde."
        );
      },
      422: () => {
        showNotification(
          "error",
          "La validación falló",
          `Parece que hubo un problema con la información proporcionada: verifíquelo e inténtelo nuevamente.`
        );
      },
    };
    const errorHandler =
      errorHandlerMapping[error.response.status] ||
      (() =>
        showNotification(
          "error",
          "error inesperado",
          `Vaya, algo salió mal: ${error.response.data.message}. Inténtelo de nuevo o comuníquese con el soporte técnico si el problema persiste.`
        ));
    errorHandler();
  }
}

function showNotification(type, title, message) {
  notification[type]({
    duration: 5,
    message: title,
    description: message,
  });
}
