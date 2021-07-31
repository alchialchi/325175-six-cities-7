import { createReducer } from '@reduxjs/toolkit';
import { loadFavorites, loadNearby, loadOffer, loadOffers, loadReviews, updateData, setDataError } from '../action';

const initialState = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  favorites: [],
  reviews: [],
  isOffersDataLoaded: false,
  isOfferDataLoaded: false,
  isNearbyOffersDataLoaded: false,
  isReviewsDataLoaded: false,
  isFavoritesDataLoaded: false,
  isDataError: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isOfferDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsDataLoaded = true;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearbyOffers = action.payload;
      state.isNearbyOffersDataLoaded = true;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
      state.isFavoritesDataLoaded = true;
    })
    .addCase(setDataError, (state, { payload }) => {
      state.isDataError = payload;
    })
    .addCase(updateData, (state, {payload}) => {
      state.offers = state.offers.map((offer) => offer.id === payload.id ? payload : offer);
      state.nearbyOffers = state.nearbyOffers.map((offer) => offer.id === payload.id ? payload : offer);
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    });
});

export { data };
