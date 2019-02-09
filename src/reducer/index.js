import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ErrorReducer from './ErrorReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  errors: ErrorReducer,
});

export default rootReducer;
