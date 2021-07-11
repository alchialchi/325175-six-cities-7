import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { APP_ROUTES } from '../../const';
import MainPage from '../pages/MainPage';
import SignIn from '../pages/SignIn';
import Favorites from '../pages/Favorites';
import Room from '../pages/Room';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={APP_ROUTES.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={APP_ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={APP_ROUTES.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={`${APP_ROUTES.OFFER}/:id`}>
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
