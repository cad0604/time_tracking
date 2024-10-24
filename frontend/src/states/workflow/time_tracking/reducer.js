import actions from "./actions";

const initialState = {
  timeTracking: [],
  isFetchingtimeTracking: false,

  isChangedAddtimeTracking: null,

  isMakeXLS: null,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_TIME_TRACKING:
      return {
        ...state,
        isFetchingtimeTracking: true,
      };
    case actions.FETCH_TIME_TRACKING_SUCCESS:
      return {
        ...state,
        isFetchingtimeTracking: false,
        timeTracking: action.payload,
      };
    case actions.FETCH_TIME_TRACKING_FAILURE:
      return { ...state, isFetchingtimeTracking: false };

    case actions.ADD_TIME_TRACKING:
      return { ...state, isChangedAddtimeTracking: null };
    case actions.ADD_TIME_TRACKING_SUCCESS:
      return { ...state, isChangedAddtimeTracking: true };
    case actions.ADD_TIME_TRACKING_FAILURE:
      return { ...state, isChangedAddtimeTracking: false };

    case actions.MAKE_XLS:
      return { ...state, isMakeXLS: null };
    case actions.MAKE_XLS_SUCCESS:
      return { ...state, isMakeXLS: true };
    case actions.MAKE_XLS_FAILURE:
      return { ...state, isMakeXLS: false };

    case actions.RESET_XLS:
      return { ...state, isMakeXLS: null };
    default:
      return state;
  }
}

export default Reducer;
