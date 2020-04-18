import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import {
  showRecipientSuccess,
  updateRecipientSuccess,
  updateRecipientFailure,
} from './actions';

export function* showRecipient({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `/recipients/${id}`);

    yield put(showRecipientSuccess(response.data));
    history.push(`/recipients/${id}`);
  } catch ({ response }) {
    toast.error(response.data.error);
  }
}

export function* updateRecipient({ payload }) {
  try {
    const {
      id,
      nome,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = payload.data;
    const response = yield call(api.put, `/recipients/${id}`, {
      nome,
      rua,
      numero,
      complemento,
      cidade,
      estado,
      cep,
    });

    yield put(updateRecipientSuccess(response.data));
    history.push(`/recipients`);
    toast.success('Destinatário Atualizado!');
  } catch (error) {
    toast.error('Erro ao atualizar o registro!');
    yield put(updateRecipientFailure());
  }
}

export default all([
  takeLatest('@recipient/SHOW_REQUEST', showRecipient),
  takeLatest('@recipient/UPDATE_REQUEST', updateRecipient),
]);
