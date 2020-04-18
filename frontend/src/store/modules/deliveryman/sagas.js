import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import {
  showDeliverymanSuccess,
  updateDeliverymanSuccess,
  updateDeliverymanFailure,
} from './actions';

export function* showDeliveryman({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `/deliveryman/${id}`);

    yield put(showDeliverymanSuccess(response.data));
    history.push(`/deliveryman/${id}`);
  } catch ({ response }) {
    toast.error(response.data.error);
  }
}

export function* updateDeliveryman({ payload }) {
  try {
    const { id, name, email, avatar_id } = payload.data;
    const response = yield call(api.put, `/deliveryman/${id}`, {
      name,
      email,
      avatar_id,
    });

    yield put(updateDeliverymanSuccess(response.data));
    history.push(`/deliveryman`);
    toast.success('Entregador atualizado!');
  } catch (error) {
    toast.error('Erro ao atualizar o registro!');
    yield put(updateDeliverymanFailure());
  }
}

export default all([
  takeLatest('@deliveryman/SHOW_REQUEST', showDeliveryman),
  takeLatest('@deliveryman/UPDATE_REQUEST', updateDeliveryman),
]);
