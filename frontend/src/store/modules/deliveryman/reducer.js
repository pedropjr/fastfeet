import { produce } from 'immer';

const INITIAL_STATE = {
  deliveryman: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/SHOW_SUCCESS': {
        draft.deliveryman = action.payload.data;
        break;
      }
      case '@deliveryman/UPDATE_SUCCESS': {
        draft.deliveryman = null;
        break;
      }
      default:
    }
  });
}
