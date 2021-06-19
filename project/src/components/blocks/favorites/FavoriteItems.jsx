import React from 'react';
import PropTypes from 'prop-types';

import offersProp from '../offers/offer.prop';
import FavoriteCard from './FavoriteCard';

export default function FavoriteItems(props) {
  const { offers, city } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoriteCard key={offer.id} offer={offer}/> )}
      </div>
    </li>
  );
}

FavoriteItems.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
  city: PropTypes.string.isRequired,
};
