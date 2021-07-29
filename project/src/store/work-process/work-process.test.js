import { workProcess } from './work-process';
import { ActionType } from '../action';
import { CITIES, SORT_TYPES } from '../../const';

describe('Work Process', () => {
  it('should return initial state by default', () => {
    const initialState = {
      city: CITIES.PARIS.name,
      cities: Object.values(CITIES),
      sortType: SORT_TYPES.DEFAULT,
      activeOffer: null,
    };

    expect(workProcess(undefined, {})).toEqual(initialState);
  });

  it('should change city name', () => {
    const state = {
      city: CITIES.PARIS.name,
    };
    const changedCityName = 'Colonge';

    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: changedCityName,
    };
    const expectedAction = {
      city: changedCityName,
    };

    expect(workProcess(state, changeCityAction)).toEqual(expectedAction);
  });

  it('should change sort type', () => {
    const state = {
      sortType: SORT_TYPES.DEFAULT,
    };
    const sortType = {
      sortType: SORT_TYPES.HIGH_TO_LOW,
    };
    const sortAction = {
      type: ActionType.SORT,
      payload: sortType,
    };
    const expectedAction = {
      sortType: sortType,
    };

    expect(workProcess(state, sortAction)).toEqual(expectedAction);
  });

  it('should set active offer by choosing active offer id', () => {
    const state = {
      activeOffer: null,
    };
    const currentOffer = 5;

    const setActiveOfferIdAction = {
      type: ActionType.ACTIVE_OFFER_ID,
      payload: currentOffer,
    };

    const expectedAction = {
      activeOffer: currentOffer,
    };

    expect(workProcess(state, setActiveOfferIdAction)).toEqual(expectedAction);
  });
});
