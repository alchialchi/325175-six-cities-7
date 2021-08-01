import { createReducer } from '@reduxjs/toolkit';
import { City, SortType } from '../../const';
import { changeCity, setActiveOfferId, sort } from '../action';

const initialState = {
  cities: Object.values(City),
  city: City.PARIS.name,
  sortType: SortType.DEFAULT,
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
