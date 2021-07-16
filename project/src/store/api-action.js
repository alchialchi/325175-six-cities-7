import { ActionCreator } from './action';
import { adaptOfferToClient } from '../utils';
import { APP_ROUTES, AuthorizationStatus } from '../const';

const API_ROUTES = {
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOG_OUT: '/logout',
};

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(API_ROUTES.HOTELS)
    .then(({ data }) => {
      const offers = adaptOfferToClient(data);
      dispatch(ActionCreator.loadOffers(offers));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(API_ROUTES.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setUser(data));
      dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH));
    })
    .catch(() => {});
};

export const login = ({ login: email, password }) => (dispatch, _getState, api) => {
  api.post(API_ROUTES.LOGIN, { email, password })
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.setUser(data));
      dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.redirectToRoute(APP_ROUTES.ROOT));
    });
};

export const logout = () => (dispatch, _getState, api) => {
  api.delete(API_ROUTES.LOG_OUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(ActionCreator.logout());
      dispatch(ActionCreator.redirectToRoute(APP_ROUTES.ROOT));
    });
};

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
