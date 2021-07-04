
import { ActionType } from './action';

import { DEFAULT_CITY } from '../const';
import offers from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  currentOffers: offers.filter((offer) => offer.city === DEFAULT_CITY),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.city,
        currentOffers: offers.filter((offer) => offer.city === action.payload),
      };
    default:
      return state;
  }
};

export { reducer };
