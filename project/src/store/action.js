import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  ACTIVE_OFFER_ID: 'activeOffer',
  CHANGE_CITY: 'city/changeCity',
  SORT: 'sort/setSort',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_NEARBY: 'data/loadNearby',
  LOAD_FAVORITES: 'data/favorites',
  REQUIRE_AUTH: 'user/reduireAuth',
  LOG_OUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  LOAD_USER_INFO: 'user/loadUserInfo',
  UPDATE_DATA: 'data/updateData',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const setActiveOfferId = createAction(ActionType.ACTIVE_OFFER_ID, (id) => ({
  payload: id,
}));

export const sort = createAction(ActionType.SORT, (sortType) => ({
  payload: sortType,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (payload) => ({
  payload,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (payload) => ({
  payload,
}));

export const loadNearby =  createAction(ActionType.LOAD_NEARBY, (payload) => ({
  payload,
}));

export const requireAuth = createAction(ActionType.REQUIRE_AUTH, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOG_OUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const loadUserInfo = createAction(ActionType.LOAD_USER_INFO, (payload) => ({
  payload,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (payload) => ({
  payload,
}));

export const updateData = createAction(ActionType.UPDATE_DATA, (payload) => ({
  payload,
}));
