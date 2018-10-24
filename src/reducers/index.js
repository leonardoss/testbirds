import { combineReducers } from 'redux';

import { clickReducer } from './clickReducer';
import MembersReducer from './membersReducer';

const reducers = combineReducers({
  clickReducer,
  MembersReducer,
});

export default reducers;
