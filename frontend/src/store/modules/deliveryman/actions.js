export function showDeliverymanRequest(id) {
  return {
    type: '@deliveryman/SHOW_REQUEST',
    payload: { id },
  };
}

export function showDeliverymanSuccess(data) {
  return {
    type: '@deliveryman/SHOW_SUCCESS',
    payload: { data },
  };
}

export function updateDeliverymanRequest(data) {
  return {
    type: '@deliveryman/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateDeliverymanSuccess(deliveryman) {
  return {
    type: '@deliveryman/UPDATE_SUCCESS',
    payload: { deliveryman },
  };
}

export function updateDeliverymanFailure() {
  return {
    type: '@deliveryman/UPDATE_FAILURE',
  };
}
