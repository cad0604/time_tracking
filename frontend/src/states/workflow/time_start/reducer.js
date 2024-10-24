import actions from "./actions";

const initialState = {
  timeStart: null,
  isFetchingtimeStart: false,

  isChangedAddtimeStart: null,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_TIME_START:
      return {
        ...state,
        isFetchingtimeStart: true,
        timeStart: null,
      };
    case actions.FETCH_TIME_START_SUCCESS:
      return {
        ...state,
        isFetchingtimeStart: false,
        timeStart: action.payload,
      };
    case actions.FETCH_TIME_START_FAILURE:
      return { ...state, isFetchingtimeStart: false };

    case actions.ADD_TIME_START:
      return { ...state, isChangedAddtimeStart: null };
    case actions.ADD_TIME_START_SUCCESS:
      return { ...state, isChangedAddtimeStart: true };
    case actions.ADD_TIME_START_FAILURE:
      return { ...state, isChangedAddtimeStart: false };

    default:
      return state;
  }
}

export default Reducer;
