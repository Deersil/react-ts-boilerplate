import { call, put, takeLatest } from 'redux-saga/effects';
import history from '@history';
import { tokenHandler } from '@utils';
import { logout, login, getUserData, registration, setLoginLoading, setLoading } from './actions';
import api from '../api';

function* getUserDataSaga() {
  try {
    yield put(setLoading.success());
    const token = tokenHandler.get();
    if (token) {
      const { email } = yield call(api.getUserInfo);
      yield put(getUserData.success(email));
      yield history.push('/');
    } else {
      yield put(getUserData.failure());
    }
    yield put(setLoading.failure());
  } catch ({ error }) {
    yield put(setLoading.failure());
    yield put(getUserData.failure());
  }
}

function* logoutSaga() {
  yield localStorage.clear();
  yield put(logout.success());
  yield history.push('/auth');
}

function* registrationSaga({ payload }) {
  try {
    yield put(setLoginLoading.success());
    const { token } = yield call(api.registration, payload);
    yield tokenHandler.set(token);
    yield put(getUserData.request());
    yield put(setLoginLoading.failure());
    history.push('/');
  } catch ({ error }) {
    yield put(registration.failure());
    yield put(setLoginLoading.failure());
  }
}

function* loginSaga({ payload }) {
  try {
    yield put(setLoginLoading.success());
    const { token } = yield call(api.login, payload);
    yield tokenHandler.set(token);
    yield put(getUserData.request());
    yield put(setLoginLoading.failure());
    history.push('/');
  } catch ({ error }) {
    yield put(login.failure());
    yield put(setLoginLoading.failure());
  }
}

function* authSagas() {
  yield takeLatest(logout.request, logoutSaga);
  yield takeLatest(login.request, loginSaga);
  yield takeLatest(getUserData.request, getUserDataSaga);
  yield takeLatest(registration.request, registrationSaga);
}

export default authSagas;
