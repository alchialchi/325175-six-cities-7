import React from 'react';
import PropTypes from 'prop-types';

import Map from '../map/Map';
import OffersList from '../offers/OffersList';
import SortList from '../sort/SortList';
import offerProp from '../offers/offer.prop';
import { CardType, CITIES } from '../../../const';

export default function Cities({ offers, city, activeOffer }) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {city}
          </b>
          <SortList />
          <OffersList offers={offers} activeOffer={activeOffer} type={CardType.CITIES} />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map city={CITIES[city.toUpperCase()]} activeOffer={activeOffer} offers={offers}/>
          </section>
        </div>
      </div>
    </div>
  );
}

Cities.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
  activeOffer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
};
