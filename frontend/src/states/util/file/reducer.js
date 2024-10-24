import actions from "./actions";

const initialState = {
  isDownloadingFile: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FILE_DOWNLOAD:
      return { ...state, isDownloadingFile: true };

    case actions.FILE_DOWNLOAD_SUCCESS:
      return { ...state, isDownloadingFile: false };

    case actions.FILE_DOWNLOAD_FAILURE:
      return { ...state, isDownloadingFile: false };

    default:
      return state;
  }
}

export default Reducer;
