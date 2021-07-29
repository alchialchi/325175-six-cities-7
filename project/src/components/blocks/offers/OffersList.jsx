import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CARD_LIST_TYPES, MAIN_TYPE } from '../../../const';

import offerProp from './offer.prop';
import OfferCard from './OfferCard';
import { getIsOffersDataLoaded } from '../../../store/data/selectors';
import Loading from '../loading/Loading';

function OffersList({
  offers,
  type = MAIN_TYPE,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) {
  const isOffersDataLoaded = useSelector(getIsOffersDataLoaded);

  return (
    <div className={CARD_LIST_TYPES[type].LIST}>
      {!isOffersDataLoaded
        ? <Loading />
        : offers.map((offer) => (
          <OfferCard
            key={offer.id}
            cardType={type}
            offer={offer}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        ))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  type: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default OffersList;
