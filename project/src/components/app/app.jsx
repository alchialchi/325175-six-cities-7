import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';

import { APP_ROUTES } from '../../const';
import MainPage from '../pages/MainPage';
import SignIn from '../pages/SignIn';
import Favorites from '../pages/Favorites';
import Room from '../pages/Room';
import NotFound from '../pages/NotFound';
import { browserHistory } from '../../services/browser-history';
import PrivateRoute from '../private-route/private-route';
import Loading from '../blocks/loading/Loading';
import { isCheckedAuth } from '../../store/api-action';

function App(props) {
  const { authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={APP_ROUTES.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={APP_ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={APP_ROUTES.FAVORITES}
          render={() => <Favorites />}
        />
        <Route exact path={`${APP_ROUTES.OFFER}/:id`}>
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export { App };
export default connect(mapStateToProps, null)(App);
