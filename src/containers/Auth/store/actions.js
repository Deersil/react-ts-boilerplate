import { actionCreator } from '@utils';

import {
  MODULE_NAME,
  LOGOUT,
  LOGIN,
  REGISTRATION,
  CHECK_USER,
  SET_LOGIN_LOADING,
  SET_LOADING,
  PICK_ROLE,
} from './constants';

const action = actionCreator(MODULE_NAME);
export const pickRole = action(PICK_ROLE);
export const getUserData = action(CHECK_USER);
export const logout = action(LOGOUT);
export const login = action(LOGIN);
export const registration = action(REGISTRATION);
export const setLoginLoading = action(SET_LOGIN_LOADING);
export const setLoading = action(SET_LOADING);
