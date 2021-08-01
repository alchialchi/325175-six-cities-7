import { workProcess } from './work-process';
import { ActionType } from '../action';
import { City, SortType } from '../../const';

describe('Work Process', () => {
  it('should return initial state by default', () => {
    const initialState = {
      city: City.PARIS.name,
      cities: Object.values(City),
      sortType: SortType.DEFAULT,
      activeOffer: null,
    };

    expect(workProcess(undefined, {})).toEqual(initialState);
  });

  it('should change city name', () => {
    const state = {
      city: City.PARIS.name,
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
      sortType: SortType.DEFAULT,
    };
    const sortType = {
      sortType: SortType.HIGH_TO_LOW,
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
