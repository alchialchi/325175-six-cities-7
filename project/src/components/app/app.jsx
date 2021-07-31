import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { APP_ROUTES } from '../../const';
import MainPage from '../pages/MainPage/MainPage';
import SignIn from '../pages/SignIn/SignIn';
import Favorites from '../pages/Favorites/Favorites';
import RoomPage from '../pages/Room/RoomPage';
import NotFound from '../pages/NotFound/NotFound';

import PrivateRoute from '../private-route/private-route';
import Loading from '../blocks/loading/Loading';
import { isCheckedAuth } from '../../store/api-action';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getIsOffersDataLoaded } from '../../store/data/selectors';

function App() {
  const isOffersDataLoaded = useSelector(getIsOffersDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus) || !isOffersDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <Switch>
      <Route exact path={APP_ROUTES.ROOT}>
        <MainPage />
      </Route>
      <Route
        exact
        path={APP_ROUTES.SIGN_IN}
      >
        <SignIn />
      </Route>
      <PrivateRoute
        exact
        path={APP_ROUTES.FAVORITES}
        render={() => <Favorites />}
      />
      <Route exact path={`${APP_ROUTES.OFFER}/:id`}>
        <RoomPage />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
