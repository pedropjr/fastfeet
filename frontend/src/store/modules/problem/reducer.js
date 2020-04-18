import { produce } from 'immer';

const INITIAL_STATE = {
  problem: null,
};

export default function problem(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problem/SHOW_SUCCESS': {
        draft.problem = action.payload.data;
        break;
      }
      default:
    }
  });
}
