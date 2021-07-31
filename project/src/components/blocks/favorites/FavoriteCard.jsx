import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offers/offer.prop';
import { FAVORITES_TYPE} from '../../../const';
import OfferCard from '../offers/OfferCard';

export default function FavoriteCard({ favoriteHotels, favoritesCity }) {
  const hotels = favoriteHotels.filter(
    (hotel) => hotel.city.name === favoritesCity,
  );

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#" data-testid="locations__item-link">
            <span>{favoritesCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {hotels.map((hotel) => <OfferCard key={hotel.id} offer={hotel} cardType={FAVORITES_TYPE} />)}
      </div>
    </li>
  );
}

FavoriteCard.propTypes = {
  favoriteHotels: PropTypes.arrayOf(offerProp),
  favoritesCity: PropTypes.string.isRequired,
};
