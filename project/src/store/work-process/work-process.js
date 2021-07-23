import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SORT_TYPES } from '../../const';
import { changeCity, setActiveOfferId, sort } from '../action';

const initialState = {
  cities: Object.values(CITIES),
  city: CITIES.PARIS.name,
  sortType: SORT_TYPES.DEFAULT,
  activeOffer: null,
};

const workProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(sort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOffer = action.payload;
    });
});

export { workProcess };
