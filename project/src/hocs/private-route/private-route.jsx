import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user/selectors';

function PrivateRoute({ render, path, exact, status, redirect }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === status
          ? render(routeProps)
          : <Redirect to={redirect} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  status: PropTypes.string,
  redirect: PropTypes.string.isRequired,
};

export default PrivateRoute;
