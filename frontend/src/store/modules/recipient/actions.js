export function showRecipientRequest(id) {
  return {
    type: '@recipient/SHOW_REQUEST',
    payload: { id },
  };
}

export function showRecipientSuccess(data) {
  return {
    type: '@recipient/SHOW_SUCCESS',
    payload: { data },
  };
}

export function updateRecipientRequest(data) {
  return {
    type: '@recipient/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateRecipientSuccess(recipient) {
  return {
    type: '@recipient/UPDATE_SUCCESS',
    payload: { recipient },
  };
}

export function updateRecipientFailure() {
  return {
    type: '@recipient/UPDATE_FAILURE',
  };
}
