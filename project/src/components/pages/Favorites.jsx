import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HiddenSvg from '../svg/HiddenSvg';
import Header from '../blocks/header/Header';
import FavoriteItems from '../blocks/favorites/FavoriteItems';
import offersProp from '../blocks/offers/offer.prop';
import { AppRoute } from '../../const';

function Favorites(props) {
  const { offers, city } = props;

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page">
        <Header loggedOut />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoriteItems offers={offers} city={city} />
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.ROOT}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    </React.Fragment>
  );
}

Favorites.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offersProp),
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers.filter(({ isFavorite}) => isFavorite),
});

export default connect(mapStateToProps)(Favorites);
