import { combineReducers } from 'redux';

import auth from '@containers/Auth/store/reducer';
import { logout } from '@containers/Auth/store/actions';

const appReducer = combineReducers({
  auth,
});

export default (state, action) => {
  if (action.type === logout.success().type) {
    state = undefined;
  }
  return appReducer(state, action);
};
