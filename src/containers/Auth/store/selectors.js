import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

export const getUsername = () => createSelector(selectAuth, state => state.email);
export const isLoaded = () => createSelector(selectAuth, state => state.loaded);
export const authentificated = () => createSelector(selectAuth, state => state.authentificated);
export const loginLoading = () => createSelector(selectAuth, state => state.loginLoading);
