import actions from "./actions";

const initialState = {
  isSigned: false,
  user: null,
  isSigning: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGNUP:
      return {
        ...state,
        isSigning: true,
      };
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigned: true,
        isSigning: false,
        user: action.payload,
      };
    case actions.SIGNUP_FAILURE:
      return { ...state, isSigned: false, isSigning: false };

    case actions.RESET_SIGNUP:
      return {
        ...state,
        isSigned: false,
      };
    default:
      return state;
  }
}

export default Reducer;
