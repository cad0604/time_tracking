import actions from "./actions";

const initialState = {
  customers: [],
  isFetchingCustomer: false,

  mustFetchCustomer: null,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_CUSTOMER:
      return {
        ...state,
        mustFetchCustomer: null,
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

    case actions.DELETE_CUSTOMER:
      return { ...state, mustFetchCustomer: null };
    case actions.DELETE_CUSTOMER_SUCCESS:
      return { ...state, mustFetchCustomer: true };
    case actions.DELETE_CUSTOMER_FAILURE:
      return { ...state, mustFetchCustomer: false };
    default:
      return state;
  }
}

export default Reducer;
