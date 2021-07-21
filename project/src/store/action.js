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

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setActiveOfferId: (id) => ({
    type: ActionType.ACTIVE_OFFER_ID,
    payload: id,
  }),
  sort: (sortType) => ({
    type: ActionType.SORT,
    payload: sortType,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffer: (payload) => ({
    type: ActionType.LOAD_OFFER,
    payload,
  }),
  loadReviews: (payload) => ({
    type: ActionType.LOAD_REVIEWS,
    payload,
  }),
  loadNearby: (payload) => ({
    type: ActionType.LOAD_NEARBY,
    payload,
  }),
  requireAuth: (status) => ({
    type: ActionType.REQUIRE_AUTH,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOG_OUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setUser: (payload) => ({
    type: ActionType.SET_USER,
    payload,
  }),
};
