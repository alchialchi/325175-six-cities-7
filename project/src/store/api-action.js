import { ActionCreator } from './action';
import { adaptOfferToClient } from '../utils';

const API_ROUTES = {
  HOTELS: '/hotels',
};

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(API_ROUTES.HOTELS)
    .then(({ data }) => {
      const offers = adaptOfferToClient(data);
      dispatch(ActionCreator.loadOffers(offers));
    })
);
