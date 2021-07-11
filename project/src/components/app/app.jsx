import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../const';
import MainPage from '../pages/MainPage';
import SignIn from '../pages/SignIn';
import Favorites from '../pages/Favorites';
import Room from '../pages/Room';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={`${AppRoute.OFFER}/:id`}>
          <Room />;
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
