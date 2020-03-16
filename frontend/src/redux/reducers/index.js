import { combineReducers } from 'redux';
import { userAuth } from './auth.reducer';
import { dialogController } from './common.reducer';
import { allServices } from './crud.reducer';

const rootReducer = combineReducers({ userAuth, dialogController, allServices });

export default rootReducer;
