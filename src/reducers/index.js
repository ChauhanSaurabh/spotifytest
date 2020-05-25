// @ts-nocheck
import {combineReducers} from 'redux';
import appReducer from './AppReducer';
import authReducer from './auth';
import dashboardReducer from './dashboard';

const applicationReducer = combineReducers({
  appReducer,
  authReducer,
  dashboardReducer,
});

export default applicationReducer;
