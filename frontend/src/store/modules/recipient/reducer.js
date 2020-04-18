import { produce } from 'immer';

const INITIAL_STATE = {
  recipient: null,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipient/SHOW_SUCCESS': {
        draft.recipient = action.payload.data;
        break;
      }
      case '@recipient/UPDATE_SUCCESS': {
        draft.recipient = null;
        break;
      }
      default:
    }
  });
}
