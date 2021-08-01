import React from 'react';
import PropTypes from 'prop-types';

import offersProp from '../offer-card/offer.prop';
import FavoriteCard from '../favorite-card/favorite-card';

export default function FavoritesList({ favoriteHotels }) {
  const cities = [...new Set(favoriteHotels.map((hotel) => hotel.city.name))];

  return (
    <ul className="favorites__list">
      {cities.map((city) => <FavoriteCard key={city} favoriteHotels={favoriteHotels} favoritesCity={city}/>)}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoriteHotels: PropTypes.arrayOf(offersProp),
};
