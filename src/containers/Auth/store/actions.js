import { actionCreator } from '@utils';

import {
  MODULE_NAME,
  LOGOUT,
  LOGIN,
  REGISTRATION,
  CHECK_USER,
  SET_LOGIN_LOADING,
  SET_LOADING,
} from './constants';

const action = actionCreator(MODULE_NAME);
export const getUserData = action(CHECK_USER);
export const logout = action(LOGOUT);
export const login = action(LOGIN);
export const registration = action(REGISTRATION);
export const setLoginLoading = action(SET_LOGIN_LOADING);
export const setLoading = action(SET_LOADING);
