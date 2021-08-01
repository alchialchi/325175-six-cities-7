import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HiddenSvg from '../../svg/hidden-svg';
import Header from '../../blocks/header/header';
import FavoritesList from '../../blocks/favorites/favorites-list';
import Toast from '../../blocks/toast/toast';

import { APP_ROUTES } from '../../../const';
import { getFavorites, getIsFavoritesDataLoaded, getIsDataError } from '../../../store/data/selectors';
import { getIsOffline } from '../../../store/user/selectors';
import { fetchFavorites } from '../../../store/api-action';
import FavoritesEmpty from '../../blocks/favorites/favorites-empty';
import Loading from '../../blocks/loading/loading';
import { AlertMessage } from '../../../const';

function Favorites() {
  const dispatch = useDispatch();
  const favoriteHotels = useSelector(getFavorites);
  const isLoaded = useSelector(getIsFavoritesDataLoaded);
  const isDataError = useSelector(getIsDataError);
  const isOffline = useSelector(getIsOffline);
  const noFavorites = favoriteHotels.length === 0;

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className={`page ${noFavorites ? 'page--favorites-empty' : ''}`}>
        <Header />
        {isOffline && <Toast message={AlertMessage.OFFLINE} />}
        {isDataError && <Toast message={AlertMessage.LOADING} />}
        <main className={`page__main page__main--favorites ${noFavorites ? 'page__main--favorites-empty' : ''}`}>
          <div className="page__favorites-container container">
            {!favoriteHotels.length
              ? <FavoritesEmpty />
              : (
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <FavoritesList favoriteHotels={favoriteHotels} />
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
