import { all } from 'redux-saga/effects';

import user from './user/sagas';
import order from './order/sagas';
import deliveryman from './deliveryman/sagas';
import recipient from './recipient/sagas';
import problem from './problem/sagas';

export default function* rootSaga() {
  return yield all([user, order, deliveryman, recipient, problem]);
}
