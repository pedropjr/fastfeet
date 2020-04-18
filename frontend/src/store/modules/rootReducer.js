import { combineReducers } from 'redux';

import user from './user/reducer';
import order from './order/reducer';
import deliveryman from './deliveryman/reducer';
import recipient from './recipient/reducer';
import problem from './problem/reducer';

export default combineReducers({
  user,
  order,
  deliveryman,
  recipient,
  problem,
});
