import produce from 'immer';

const INITIAL_STATE = {
  deliveryman: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.deliveryman = action.payload.deliveryman;
      });
    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.deliveryman = null;
      });
    default:
      return state;
  }
}
