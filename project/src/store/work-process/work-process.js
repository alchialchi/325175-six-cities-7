import { ActionType } from '../action';
import { CITIES, SORT_TYPES } from '../../const';

const initialState = {
  cities: Object.values(CITIES),
  city: CITIES.PARIS.name,
  sortType: SORT_TYPES.DEFAULT,
  activeOffer: null,
};

const workProcess = (state = initialState, action) => {
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

export { workProcess };
