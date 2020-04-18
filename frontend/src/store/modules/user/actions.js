export function logInRequest(email, password) {
  return {
    type: '@user/LOGIN_REQUEST',
    payload: { email, password },
  };
}

export function logInSuccess(user, token) {
  return {
    type: '@user/LOGIN_SUCCESS',
    payload: { user, token },
  };
}

export function logInFailure() {
  return {
    type: '@user/LOGIN_FAILURE',
  };
}

export function logOut() {
  return {
    type: '@user/LOGOUT',
  };
}
