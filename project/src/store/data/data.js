import { ActionType } from '../action';

const initialState = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  favorites: [],
  comments: [],
  isOffersListLoaded: false,
  isOfferLoaded: false,
  isNearbyOffersLoaded: false,
  isReviewsLoaded: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersListLoaded: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferLoaded: true,
      };
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearbyOffers: action.payload,
        isNearbyOffersLoaded: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true,
      };
    default:
      return state;
  }
};

export { data };
