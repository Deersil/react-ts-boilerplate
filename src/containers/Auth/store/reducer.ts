import { createReducer } from 'redux-act';
import produce from 'immer';
import { logout, registration, login, getUserData, setLoginLoading, setLoading } from './actions';
import { IState } from './types';

const initialState: IState = {
  authentificated: false,
  email: null,
  firstName: null,
  lastName: null,
  loaded: true,
  loginLoading: false,
};

export default createReducer(
  {
    [setLoading.success]: state =>
      produce(state, nextState => {
        nextState.loaded = false;
      }),
    [setLoading.failure]: state =>
      produce(state, nextState => {
        nextState.loaded = true;
      }),
    [setLoginLoading.success]: state =>
      produce(state, nextState => {
        nextState.loginLoading = true;
      }),
    [setLoginLoading.failure]: state =>
      produce(state, nextState => {
        nextState.loginLoading = false;
      }),
    [logout.failure]: () => ({
      ...initialState,
    }),
    [getUserData.success]: (state, payload) =>
      produce(state, nextState => {
        nextState.authentificated = true;
        nextState.email = payload;
      }),
    [login.success]: (state, payload) =>
      produce(state, nextState => {
        nextState.authentificated = true;
        nextState.email = payload;
        nextState.loaded = true;
      }),
    [registration.success]: (state, payload) =>
      produce(state, nextState => {
        nextState.authentificated = true;
        nextState.email = payload;
      }),
  },
  initialState
);
