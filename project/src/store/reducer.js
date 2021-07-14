import { CITIES, SORT_TYPES } from '../const';
import { ActionType } from './action';
import reviews from '../mocks/reviews';

const initialState = {
  offers: [],
  reviews: reviews,
  cities: Object.values(CITIES),
  city: CITIES.PARIS.name,
  sortType: SORT_TYPES.DEFAULT,
  activeOffer: null,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOffer: action.payload,
      };
    case ActionType.SORT:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export { reducer };
