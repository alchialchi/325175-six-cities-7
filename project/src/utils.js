import { MAX_RATING, SORT_TYPE } from './const';

export const getRatingInPercent = (rating) => `${rating / MAX_RATING * 100}%`;

export const sortOffers = (offers, type, city) => {
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  switch (type) {
    case SORT_TYPE.LOW_TO_HIGH.name:
      return filteredOffers.sort((a, b) => a.price - b.price);
    case SORT_TYPE.HIGH_TO_LOW.name:
      return filteredOffers.sort((a, b) => b.price - a.price);
    case SORT_TYPE.TOP_RATED.name:
      return filteredOffers.sort((a, b) => b.rating - a.rating);
    default:
      return filteredOffers;
  }
};
