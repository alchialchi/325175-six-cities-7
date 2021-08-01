import { loadOffers, loadOffer, loadReviews, loadNearby, redirectToRoute, loadUserInfo, requireAuth, updateData, loadFavorites, userLogout } from './action';
import { adaptOfferToClient, adaptReviewToClient, adaptUserInfoToClient } from '../utils';
import { AppRoute, APIRoute, AuthorizationStatus } from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({ data }) => {
      dispatch(loadOffers(
        data.map((offer) => adaptOfferToClient(offer)),
      ));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({ data }) => dispatch(loadOffer(adaptOfferToClient(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      dispatch(loadNearby(
        data.map((offer) => adaptOfferToClient(offer)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({ data }) => {
      dispatch(requireAuth(AuthorizationStatus.AUTH));
      dispatch(loadUserInfo(adaptUserInfoToClient(data)));
    })
    .catch(() => dispatch(requireAuth(AuthorizationStatus.NO_AUTH)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({ data }) => {
      dispatch(loadReviews(
        data.map((review) => adaptReviewToClient(review)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const createComment = (id, { comment, rating }) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, { comment, rating })
    .then(({ data }) => {
      dispatch(loadReviews(
        data.map((review) => adaptReviewToClient(review)),
      ));
    })
);

export const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      api.defaults.headers['x-token'] = data.token;
      dispatch(loadUserInfo(adaptUserInfoToClient(data)));
    })
    .then(() => dispatch(requireAuth(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .then(dispatch(fetchOffersList()))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOG_OUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(userLogout()))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({ data }) => {
      dispatch(loadFavorites(
        data.map((offer) => adaptOfferToClient(offer)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(APIRoute.LOGIN)))
);

export const sendFavorite = (id, status, needUpdate = false) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({ data }) => {
      if (needUpdate) {
        dispatch(loadOffer(adaptOfferToClient(data)));
      }
      dispatch(updateData(adaptOfferToClient(data)));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.SIGN_IN)))
);

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
