import { loadOffers, loadOffer, loadReviews, loadNearby, redirectToRoute, setUser, requireAuth } from './action';
import { adaptOfferToClient, adaptReviewToClient } from '../utils';
import { APP_ROUTES, AuthorizationStatus } from '../const';

const API_ROUTES = {
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOG_OUT: '/logout',
  COMMENTS: '/comments',
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

export const getNearbyOffers = (id) => (dispatch, _getState, api) => (
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
    .then(({data}) => {
      dispatch(setUser(data));
      dispatch(requireAuth(AuthorizationStatus.AUTH));
    })
    .catch(() => {});
};

export const getReviews = (id) => (dispatch, _getState, api) => (
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
      dispatch(setUser(data));
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

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
