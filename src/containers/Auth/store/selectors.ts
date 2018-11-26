import { createSelector } from 'reselect';

const selectAuth = (state: any) => state.auth;

export const getUsername = () => createSelector(selectAuth, state => state.email);
export const isLoaded = () => createSelector(selectAuth, state => state.loaded);
export const isAuthentificated = () => createSelector(selectAuth, state => state.authentificated);
export const loginLoading = () => createSelector(selectAuth, state => state.loginLoading);
