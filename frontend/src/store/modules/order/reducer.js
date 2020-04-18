import { produce } from 'immer';

const INITIAL_STATE = {
  order: null,
  loading: false,
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@order/SHOW_SUCCESS': {
        draft.loading = false;
        draft.order = action.payload.data;
        break;
      }
      case '@order/SHOW_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@order/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@order/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@order/FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
