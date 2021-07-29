import React from 'react';
import offerProp from '../offers/offer.prop';
import { FAVORITES_TYPE} from '../../../const';
import OfferCard from '../offers/OfferCard';

export default function FavoriteCard(props) {
  const { offer } = props;

  return (
    <OfferCard cardType={FAVORITES_TYPE} offer={offer} />
  );
}

FavoriteCard.propTypes = {
  offer: offerProp,
};
