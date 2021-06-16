import React, { useState } from 'react';
import PropTypes from 'prop-types';

import offerProp from './offer.prop';
import OfferCard from './OfferCard';

export default function OffersList({ offers }) {
  const { id } = offers;

  const [, setHovered] = useState();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setHovered({ ...offer, id})}
          onMouseLeave={() => setHovered({})}
        />
      ))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};
