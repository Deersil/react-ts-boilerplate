import { combineReducers } from 'redux';

import auth from '../containers/Auth/store/reducer';
import { logout } from '../containers/Auth/store/actions';

const appReducer = combineReducers({
  auth,
});

interface IAction {
  type: string,
  payload: any,
}

export default (state: any, action: IAction) => {
  if (action.type === logout.success().type) {
    state = undefined;
  }
  return appReducer(state, action);
};
