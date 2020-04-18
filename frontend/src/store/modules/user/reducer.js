import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  user: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/LOGIN_SUCCESS':
      return produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.token = action.payload.token;
        draft.signed = true;
      });
    case '@user/LOGOUT':
      return produce(state, (draft) => {
        draft.user = null;
        draft.token = null;
        draft.signed = false;
      });
    default:
      return state;
  }
}
