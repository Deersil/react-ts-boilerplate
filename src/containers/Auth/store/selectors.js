import { createSelector } from 'reselect';
import { ADULT, KID } from './constants';
import { formatCurrency } from '@utils';

const selectAuth = state => state.auth;

export const isLoading = () =>
  createSelector(
    selectAuth,
    state => state.loader
  );
export const isAuthenticated = () =>
  createSelector(
    selectAuth,
    state => state.authenticated
  );
export const isAdult = () =>
  createSelector(
    selectAuth,
    state => state.role === ADULT
  );

export const isKid = () =>
  createSelector(
    selectAuth,
    state => state.role === KID
  );

export const getFullName = () =>
  createSelector(
    selectAuth,
    state => `${state.firstName || ' '} ${state.lastName || ' '}`
  );

export const getAccountBalance = () =>
  createSelector(
    selectAuth,
    state => {
      const balance = state.accountBalance || 0;
      return `${formatCurrency(balance, ' ')} $`;
    }
  );

export const getAvatar = () =>
  createSelector(
    selectAuth,
    state => state.avatar || ''
  );

export const getBackground = () =>
  createSelector(
    selectAuth,
    state => state.background
  );
