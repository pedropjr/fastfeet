export function showProblemRequest(id) {
  return {
    type: '@problem/SHOW_REQUEST',
    payload: { id },
  };
}

export function showProblemSuccess(data) {
  return {
    type: '@problem/SHOW_SUCCESS',
    payload: { data },
  };
}
