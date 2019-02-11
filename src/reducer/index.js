import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ErrorReducer from './ErrorReducer';
import MenuReducer from './MenuReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  errors: ErrorReducer,
  menu:MenuReducer

});

export default rootReducer;
