import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import RoomPage from './room-page';
import { offer } from '../../../mocks/offers';
import reviews from '../../../mocks/reviews';

const history = createMemoryHistory();
const mockStore = configureStore();
const storeMockedData = {
  DATA: {
    offer: offer,
    reviews: reviews,
    nearbyOffers: [offer],
    isOfferDataLoaded: true,
    isNearbyOffersDataLoaded: true,
    isReviewsDataLoaded: true,
    isDataError: false,
  },
  USER: {
    authorizationStatus: 'NO_AUTH',
  },
};

jest.mock('../../blocks/offers/offers-list', () => ({
  __esModule: true,
  default() {
    return <div>Offers</div>;
  },
}));

jest.mock('../../blocks/offers/offer-card', () => ({
  __esModule: true,
  default() {
    return <div>Offer</div>;
  },
}));

jest.mock('../../blocks/review/review', () => ({
  __esModule: true,
  default() {
    return <div>Review</div>;
  },
}));

jest.mock('../../blocks/review/reviews-list', () => ({
  __esModule: true,
  default() {
    return <div>Reviews List</div>;
  },
}));

jest.mock('../../blocks/map/map', () => ({
  __esModule: true,
  default() {
    return <div>Map</div>;
  },
}));

jest.mock('../../blocks/header/header', () => ({
  __esModule: true,
  default() {
    return <div>Header</div>;
  },
}));

describe('Room Page', () => {
  it('should render correctly', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <RoomPage offer={offer} reviews={reviews} nearbyOffers={offer} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Reviews List')).toBeInTheDocument();
    expect(screen.getByText('Map')).toBeInTheDocument();
    expect(screen.getByText('Offers')).toBeInTheDocument();
  });
});
