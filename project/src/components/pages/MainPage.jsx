import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LocationList from '../blocks/locations/LocationsList';
import Header from '../blocks/header/Header';
import Cities from '../blocks/cities/Cities';
import NoCities from '../blocks/cities/NoCities';
import offersProp from '../blocks/offers/offer.prop';
import HiddenSvg from '../svg/HiddenSvg';
import { sortOffers } from '../../utils';

function MainPage({ offers, city, activeOffer }) {

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page page--gray page--main">
        <Header loggedOut />
        <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
          <h1 className="visually-hidden">Cities</h1>
          <LocationList />
          {offers.length > 0 ?
            <Cities offers={offers} activeOffer={activeOffer} city={city}/> :
            <NoCities city={city} />}
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
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: sortOffers(state.offers, state.sortType.name, state.city),
  activeOffer: state.activeOffer,
});

export { MainPage };
export default connect(mapStateToProps)(MainPage);
