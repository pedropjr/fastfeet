import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { showProblemSuccess } from './actions';

export function* showProblem({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `/problems/${id}`);

    yield put(showProblemSuccess(response.data));
  } catch ({ response }) {
    toast.error(response.data.error);
  }
}

export default all([takeLatest('@problem/SHOW_REQUEST', showProblem)]);
