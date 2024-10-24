import { combineReducers } from "redux";

import authenticateReducer from "states/auth/login/reducer";

import signupReducer from "states/auth/signup/reducer";

import crmCustomerReducer from "states/crm/customer/reducer";

import workflowTimeStartReducer from "states/workflow/time_start/reducer";
import workflowTimeTrackingReducer from "states/workflow/time_tracking/reducer";

import utilFileReducer from "states/util/file/reducer";

const rootReducer = combineReducers({
  auth: authenticateReducer,
  signup: signupReducer,
  crmCustomer: crmCustomerReducer,
  workflowTimeStart: workflowTimeStartReducer,
  workflowTimeTracking: workflowTimeTrackingReducer,
  utilFile: utilFileReducer,
});

export default rootReducer;
