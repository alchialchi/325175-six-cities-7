import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import RoomPage from './RoomPage';
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

jest.mock('../../blocks/offers/OffersList', () => ({
  __esModule: true,
  default() {
    return <div>Offers</div>;
  },
}));

jest.mock('../../blocks/offers/OfferCard', () => ({
  __esModule: true,
  default() {
    return <div>Offer</div>;
  },
}));

jest.mock('../../blocks/review/Review', () => ({
  __esModule: true,
  default() {
    return <div>Review</div>;
  },
}));

jest.mock('../../blocks/review/ReviewsList', () => ({
  __esModule: true,
  default() {
    return <div>Reviews List</div>;
  },
}));

jest.mock('../../blocks/map/Map', () => ({
  __esModule: true,
  default() {
    return <div>Map</div>;
  },
}));

jest.mock('../../blocks/header/Header', () => ({
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
