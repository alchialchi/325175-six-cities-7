import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../const';
import MainPage from '../pages/main';
import SignIn from '../pages/sign-in';
import Favorites from '../pages/favorites';
import Room from '../pages/room';
import NotFound from '../pages/not-found';
function App(props) {
  const { data } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage offers={data}/>
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.ROOM}>
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
  data: PropTypes.array.isRequired,
};

export default App;
