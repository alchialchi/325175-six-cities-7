import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LocationList from '../blocks/locations/LocationsList';
import Header from '../blocks/header/Header';
import Cities from '../blocks/cities/Cities';
import Loading from '../blocks/loading/Loading';
import offersProp from '../blocks/offers/offer.prop';
import HiddenSvg from '../svg/HiddenSvg';
import { sortOffers } from '../../utils';
import { getActiveOffer, getCity, getSortType } from '../../store/work-process/selectors';
import { getIsOffersDataLoaded, getOffers } from '../../store/data/selectors';

function MainPage({ offers, city, activeOffer, isOffersListLoaded }) {
  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page page--gray page--main">
        <Header />
        <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
          <h1 className="visually-hidden">Cities</h1>
          <LocationList />
          {!isOffersListLoaded ?
            <Loading />
            : <Cities offers={offers} activeOffer={activeOffer} city={city} />}
        </main>
      </div>
    </React.Fragment>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  city: PropTypes.string.isRequired,
  activeOffer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  isOffersListLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: sortOffers(getOffers(state), getSortType(state).name, getCity(state)),
  activeOffer: getActiveOffer(state),
  isOffersListLoaded: getIsOffersDataLoaded(state),
});

export { MainPage };
export default connect(mapStateToProps)(MainPage);
