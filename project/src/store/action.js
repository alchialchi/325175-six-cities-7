export const ActionType = {
  ACTIVE_OFFER_ID: 'activeOffer',
  CHANGE_CITY: 'city/changeCity',
  SORT: 'sort/setSort',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_NEARBY: 'data/loadNearby',
  REQUIRE_AUTH: 'user/reduireAuth',
  LOG_OUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  SET_USER: 'user',
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const setActiveOfferId = (id) => ({
  type: ActionType.ACTIVE_OFFER_ID,
  payload: id,
});

export const sort = (sortType) => ({
  type: ActionType.SORT,
  payload: sortType,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadOffer = (payload) => ({
  type: ActionType.LOAD_OFFER,
  payload,
});

export const loadReviews = (payload) => ({
  type: ActionType.LOAD_REVIEWS,
  payload,
});

export const loadNearby = (payload) => ({
  type: ActionType.LOAD_NEARBY,
  payload,
});

export const requireAuth = (status) => ({
  type: ActionType.REQUIRE_AUTH,
  payload: status,
});

export const logout = () => ({
  type: ActionType.LOG_OUT,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setUser = (payload) => ({
  type: ActionType.SET_USER,
  payload,
});
