import { loadOffers, loadOffer, loadReviews, loadNearby, redirectToRoute, loadUserInfo, requireAuth, updateData, loadFavorites } from './action';
import { adaptOfferToClient, adaptReviewToClient, adaptUserInfoToClient } from '../utils';
import { APP_ROUTES, AuthorizationStatus } from '../const';

const API_ROUTES = {
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOG_OUT: '/logout',
  COMMENTS: '/comments',
  FAVORITE: '/favorite',
};

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(API_ROUTES.HOTELS)
    .then(({ data }) => {
      dispatch(loadOffers(
        data.map((offer) => adaptOfferToClient(offer)),
      ));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${API_ROUTES.HOTELS}/${id}`)
    .then(({ data }) => dispatch(loadOffer(adaptOfferToClient(data))))
    .catch(() => dispatch(redirectToRoute(APP_ROUTES.NOT_FOUND)))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${API_ROUTES.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      dispatch(loadNearby(
        data.map((offer) => adaptOfferToClient(offer)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(APP_ROUTES.NOT_FOUND)))
);

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(API_ROUTES.LOGIN)
    .then(({ data }) => {
      dispatch(requireAuth(AuthorizationStatus.AUTH));
      dispatch(loadUserInfo(adaptUserInfoToClient(data)));
    })
    .catch(() => {});
};

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${API_ROUTES.COMMENTS}/${id}`)
    .then(({ data }) => {
      dispatch(loadReviews(
        data.map((review) => adaptReviewToClient(review)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(APP_ROUTES.NOT_FOUND)))
);

export const createComment = (id, { comment, rating }) => (dispatch, _getState, api) => (
  api.post(`${API_ROUTES.COMMENTS}/${id}`, { comment, rating })
    .then(({ data }) => {
      dispatch(loadReviews(
        data.map((review) => adaptReviewToClient(review)),
      ));
    })
    .catch(() => {})
);

export const login = ({ login: email, password }) => (dispatch, _getState, api) => {
  api.post(API_ROUTES.LOGIN, { email, password })
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      api.defaults.headers['x-token'] = data.token;
      dispatch(loadUserInfo(adaptUserInfoToClient(data)));
      dispatch(requireAuth(AuthorizationStatus.AUTH));
      dispatch(redirectToRoute(APP_ROUTES.ROOT));
    });
};

export const logout = () => (dispatch, _getState, api) => {
  api.delete(API_ROUTES.LOG_OUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(logout());
    });
};

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(API_ROUTES.FAVORITE)
    .then(({ data }) => {
      dispatch(loadFavorites(
        data.map((offer) => adaptOfferToClient(offer)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(API_ROUTES.LOGIN)))
);

export const sendFavorite = (id, status, needUpdate = false) => (dispatch, _getState, api) => (
  api.post(`${API_ROUTES.FAVORITE}/${id}/${status}`)
    .then(({ data }) => {
      if (needUpdate) {
        dispatch(loadOffer(adaptOfferToClient(data)));
      }
      dispatch(updateData(adaptOfferToClient(data)));
    })
    .catch(() => dispatch(redirectToRoute(APP_ROUTES.LOGIN)))
);

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
