import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HiddenSvg from '../svg/HiddenSvg';
import Header from '../blocks/header/Header';
import FavoriteItems from '../blocks/favorites/FavoriteItems';

import { APP_ROUTES } from '../../const';
import { getFavorites } from '../../store/data/selectors';
import { fetchFavorites } from '../../store/api-action';
import FavoritesEmpty from '../blocks/favorites/FavoritesEmpty';

function Favorites() {
  const dispatch = useDispatch();
  const offers = useSelector(getFavorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            {!offers.length
              ? <FavoritesEmpty />
              : (
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    <FavoriteItems offers={offers} />
                  </ul>
                </section>
              )}
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={APP_ROUTES.ROOT}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Favorites;
