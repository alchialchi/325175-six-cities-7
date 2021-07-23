import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveOfferId } from '../../../store/action';
import { CARD_TYPES } from '../../../const';

import offerProp from './offer.prop';
import OfferCard from './OfferCard';
import { getIsOffersDataLoaded } from '../../../store/data/selectors';
import Loading from '../loading/Loading';

const getClassByType = (type) => {
  switch (type) {
    case CARD_TYPES.FAVORITES:
      return `${type}__places`;
    case CARD_TYPES.NEAR_PLACES:
      return `${type}__list places__list`;
    default:
      return `${type}__places-list places__list tabs__content`;
  }
};

function OffersList({ offers, type = CARD_TYPES.CITIES }) {
  const dispatch = useDispatch();
  const isOffersDataLoaded = useSelector(getIsOffersDataLoaded);

  return (
    <div className={getClassByType(type)}>
      {!isOffersDataLoaded
        ? <Loading />
        : offers.map((offer) => (
          <OfferCard
            key={offer.id}
            cardType={type}
            offer={offer}
            onMouseEnter={(payload) => dispatch(setActiveOfferId(payload))}
          />
        ))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  type: PropTypes.string,
};

export default OffersList;
