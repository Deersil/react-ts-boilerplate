import { createReducer } from 'redux-act';
import produce from 'immer';
import { logout, pickRole, getUserData, setLoading } from './actions';

const initialState = {
  authenticated: false,
  loader: false,
  email: null,
  firstName: null,
  lastName: null,
  loginLoading: false,
  background: null,
  roles: null,
};

export default createReducer(
  {
    [pickRole.success]: state =>
      produce(state, nextState => {
        nextState.authenticated = true;
      }),
    [pickRole.failure]: state =>
      produce(state, nextState => {
        nextState.authenticated = false;
      }),
    [setLoading.success]: state =>
      produce(state, nextState => {
        nextState.loader = true;
      }),
    [setLoading.failure]: state =>
      produce(state, nextState => {
        nextState.loader = false;
      }),
    [logout.failure]: () => ({
      ...initialState,
    }),
    [getUserData.success]: (
      state,
      { email, role, firstName, lastName, avatar, accountBalance, background }
    ) =>
      produce(state, nextState => {
        nextState.authenticated = true;
        nextState.email = email;
        nextState.avatar = avatar;
        nextState.firstName = firstName;
        nextState.lastName = lastName;
        nextState.accountBalance = accountBalance;
        nextState.role = role;
        nextState.background = background;
      }),
    [getUserData.failure]: state =>
      produce(state, nextState => {
        nextState.authenticated = false;
        nextState.email = null;
        nextState.role = null;
      }),
  },
  initialState
);
