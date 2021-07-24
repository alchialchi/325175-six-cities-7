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

export const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
    host: {
      avatarUrl: offer.host.avatar_url,
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
    },
  };

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = {
    ...review,
    user: {
      avatarUrl: review.user.avatar_url,
      id: review.user.id,
      isPro: review.user.is_pro,
      name: review.user.name,
    },
  };

  return adaptedReview;
};

export const adaptUserInfoToClient = (userInfo) => {
  const adaptedUserInfo = {
    ...userInfo,
    avatarUrl: userInfo.avatar_url,
    isPro: userInfo.is_pro,
  };
  delete adaptedUserInfo.avatar_url;
  delete adaptedUserInfo.is_pro;

  return adaptedUserInfo;
};
