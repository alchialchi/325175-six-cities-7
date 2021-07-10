import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import { CITIES, SORT_TYPE } from '../const';
import { ActionType } from './action';

const initialState = {
  offers: offers,
  reviews: reviews,
  cities: Object.values(CITIES),
  city: CITIES.PARIS.name,
  sortType: SORT_TYPE.DEFAULT,
  activeOffer: null,
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
    default:
      return state;
  }
};

export { reducer };
