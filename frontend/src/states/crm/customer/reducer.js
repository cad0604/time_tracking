import actions from "./actions";

const initialState = {
  customers: [],
  isFetchingCustomer: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_CUSTOMER:
      return {
        ...state,
        isFetchingCustomer: true,
      };
    case actions.FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetchingCustomer: false,
        customers: action.payload,
      };
    case actions.FETCH_CUSTOMER_FAILURE:
      return { ...state, isFetchingCustomer: false };

    default:
      return state;
  }
}

export default Reducer;
