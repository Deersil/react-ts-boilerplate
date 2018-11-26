import { call, put, takeLatest } from 'redux-saga/effects';

import { tokenHandler } from '@utils';
import { logout, pickRole, getUserData, setLoading } from './actions';
import api from '../api';

function* pickRoleSaga({ payload }) {
  try {
    yield put(setLoading.success());
    const { token } = yield call(api.pickRole, payload);
    tokenHandler.set(token);
    yield put(pickRole.success());
    yield put(getUserData.request());
  } catch (error) {
    yield put(getUserData.failure());
  }
}
function* getUserDataSaga() {
  try {
    const token = yield tokenHandler.get();
    yield put(setLoading.success());
    if (token) {
      const data = yield call(api.getUserData);
      yield put(getUserData.success(data));
    } else {
      yield put(getUserData.failure());
    }
    yield put(setLoading.failure());
  } catch (error) {
    yield put(setLoading.failure());
    yield put(getUserData.failure());
  }
}

function* logoutSaga() {
  yield tokenHandler.removeAll();
  yield put(logout.success());
}

function* authSagas() {
  yield takeLatest(logout.request, logoutSaga);
  yield takeLatest(getUserData.request, getUserDataSaga);
  yield takeLatest(pickRole.request, pickRoleSaga);
}

export default authSagas;
