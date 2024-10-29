import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { getXlsDownload } from "utils/axios-client";

// function* fileDownload(action) {
//   try {
//     yield getFileDownload(`utils/file/download?path=${action.payload}`).then(
//       (res) => {
//         const url = window.URL.createObjectURL(new Blob([res.data]));
//         const link = document.createElement("a");
//         link.href = url;
//         if (typeof window.navigator.msSaveBlob === "function") {
//           window.navigator.msSaveBlob(res.data, action.fileName);
//         } else {
//           link.setAttribute("download", action.fileName);
//           document.body.appendChild(link);
//           link.click();
//         }
//       },
//       (error) => {
//         alert("Something went wrong");
//       }
//     );
//     yield put({
//       type: actions.FILE_DOWNLOAD_SUCCESS,
//     });
//   } catch (error) {
//     yield put({ type: actions.FILE_DOWNLOAD_FAILURE });
//   }
// }

function* xlsDownload(action) {
  try {
    yield getXlsDownload(
      `workflow/time-trace/make-file?startDate=${action.startDate}&endDate=${action.endDate}&userId=${action.userId}`
    ).then(
      (res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        if (typeof window.navigator.msSaveBlob === "function") {
          window.navigator.msSaveBlob(res.data, action.fileName);
        } else {
          link.setAttribute("download", action.fileName);
          document.body.appendChild(link);
          link.click();
        }
      },
      (error) => {
        alert("Something went wrong");
      }
    );
    yield put({
      type: actions.FILE_DOWNLOAD_SUCCESS,
    });
  } catch (error) {
    yield put({ type: actions.FILE_DOWNLOAD_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.FILE_DOWNLOAD, xlsDownload)]);
}
