import { MAX_RATING, SORT_TYPES } from './const';

export const getRatingInPercent = (rating) => `${rating / MAX_RATING * 100}%`;

export const sortOffers = (offers, type, city) => {
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  switch (type) {
    case SORT_TYPES.LOW_TO_HIGH.name:
      return filteredOffers.sort((a, b) => a.price - b.price);
    case SORT_TYPES.HIGH_TO_LOW.name:
      return filteredOffers.sort((a, b) => b.price - a.price);
    case SORT_TYPES.TOP_RATED.name:
      return filteredOffers.sort((a, b) => b.rating - a.rating);
    default:
      return filteredOffers;
  }
};
