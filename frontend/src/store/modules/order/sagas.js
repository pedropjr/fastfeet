import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { showOrderSuccess, updateOrderSuccess, orderFailure } from './actions';

export function* showOrder({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `/orders/${id}`);

    yield put(showOrderSuccess(response.data));
  } catch ({ response }) {
    yield put(orderFailure());

    toast.error(response.data.error);
  }
}

export function* showFormattedOrder({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/orders/${id}`);
    let data = {
      id: response.data.id,
      recipient: {
        value: null,
        label: null,
      },
      deliveryman: {
        value: null,
        label: null,
      },
      product: response.data.product,
    };

    if (response.data.recipient_id) {
      data = {
        ...data,
        recipient: {
          value: response.data.recipient_id,
          label: response.data.recipient.nome,
        },
      };
    }

    if (response.data.deliveryman_id) {
      data = {
        ...data,
        deliveryman: {
          value: response.data.deliveryman_id,
          label: response.data.deliveryman.name,
        },
      };
    }
    yield put(showOrderSuccess(data));
    history.push(`/orders/${id}/editar`);
  } catch (error) {
    yield put(orderFailure());
    toast.error('Falha ao remover encomenda');
  }

  /**
    const data = {
      id: response.data.id,
      recipient: {
        value: response.data.recipient_id,
        label: response.data.recipient.nome,
      },
      deliveryman: {
        value: response.data.deliveryman_id,
        label: response.data.deliveryman.name,
      },
      product: response.data.product,
    }; */
}

export function* updateOrder({ payload }) {
  const { id, data } = payload;

  try {
    yield call(api.put, `/orders/${id}`, data);

    yield put(updateOrderSuccess());

    toast.success('Atualização feita com sucesso!');
    history.push('/orders');
  } catch ({ response }) {
    yield put(orderFailure());
    toast.error(response.data.error);
  }
}

export default all([
  takeLatest('@order/SHOW_REQUEST', showOrder),
  takeLatest('@order/SHOW_FORMATTED_REQUEST', showFormattedOrder),
  takeLatest('@order/UPDATE_REQUEST', updateOrder),
]);
