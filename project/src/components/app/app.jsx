import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../const';
import MainPage from '../pages/Main';
import SignIn from '../pages/SignIn';
import Favorites from '../pages/Favorites';
import Room from '../pages/Room';
import NotFound from '../pages/NotFound';

import offersProp from '../blocks/offers/offer.prop';
function App(props) {
  const { offers } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage offers={offers}/>
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites offers={offers} />
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
  offers: PropTypes.arrayOf(offersProp),
};

export default App;
