import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { logInSuccess } from './actions';

export function* logIn({ payload }) {
  try {
    const { email, password } = payload; // Destructing payload

    /** Sending a POST call to the /session route within email and password as payload */
    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    /** Destructing response.data */
    const { user, token } = response.data;

    /** Setting up the token */
    api.defaults.headers.Authorization = `Bearer ${token}`;

    /** Calling the logInSuccess action */
    yield put(logInSuccess(user, token));

    history.push('/orders');
  } catch (err) {
    toast.error('Falha na autenticação, verifique os seus dados!');
  }
}

export function logOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.user;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@user/LOGIN_REQUEST', logIn),
  takeLatest('@user/LOGOUT', logOut),
]);
