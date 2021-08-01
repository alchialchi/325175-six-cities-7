import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CardListType, MAIN_TYPE } from '../../../const';

import offerProp from '../offer-card/offer.prop';
import OfferCard from '../offer-card/offer-card';
import { getIsOffersDataLoaded } from '../../../store/data/selectors';
import Loading from '../loading/loading';

function OffersList({
  offers,
  type = MAIN_TYPE,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) {
  const isOffersDataLoaded = useSelector(getIsOffersDataLoaded);

  return (
    <div className={CardListType[type].LIST}>
      {!isOffersDataLoaded
        ? <Loading />
        : offers.map((offer) => (
          <OfferCard
            key={offer.id}
            cardType={type}
            offer={offer}
            onMouseEnter={() => onMouseEnter(offer.id)}
            onMouseLeave={() => onMouseLeave(null)}
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
