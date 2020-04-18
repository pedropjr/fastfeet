/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { store } from '../store/index';
import DefaultLayout from '../pages/_layouts/default/index';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().user;

  /** Checking if the the user is logged in and if the route that he is trying to access
   * is private, if it is, return a Redirect component to the root route
   */
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  /** Checking if the user is logged and if he is trying to access the login page, if so,
   * redirect him to the dashboard page */
  if (signed && !isPrivate) {
    return <Redirect to="/orders" />;
  }

  if (signed) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
