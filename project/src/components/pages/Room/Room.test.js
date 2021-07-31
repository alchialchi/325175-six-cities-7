import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import Room from './Room';

jest.mock('../../blocks/offers/OffersList', () => ({
  __esModule: true,
  default() {
    return <div>Mocked offers</div>;
  },
}));

jest.mock('../../blocks/review/Review', () => ({
  __esModule: true,
  default() {
    return <div>Mocked review</div>;
  },
}));

jest.mock('../../blocks/review/ReviewsList', () => ({
  __esModule: true,
  default() {
    return <div>Mocked review list</div>;
  },
}));

jest.mock('../../blocks/map/Map', () => ({
  __esModule: true,
  default() {
    return <div>Mocked map</div>;
  },
}));

jest.mock('../../blocks/header/Header', () => ({
  __esModule: true,
  default() {
    return <div>Mocked header</div>;
  },
}));

const offer = {
  bedrooms: 4,
  city: {
    location: {
      latitude: 52.370,
      longitude: 4.895,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
  ],
  host: {
    avatarUrl: 'img/test.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/test.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.355,
    longitude: 4.673,
    zoom: 10,
  },
  maxAdults: 4,
  previewImage: 'img/test.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const reviews = [
  {
    comment: 'Ullamco sunt occaecat voluptate magna.',
    date: '2021-09-08T14:13:56.569Z',
    id: 1,
    rating: 3,
    user: {
      avatarUrl: 'img/test.png',
      id: 1,
      isPro: false,
      name: 'John Doe',
    },
  },
  {
    comment: 'Labore et nulla laboris eu aliquip eiusmod veniam.',
    date: '2020-06-08T14:12:56.569Z',
    id: 2,
    rating: 2,
    user: {
      avatarUrl: 'img/test.png',
      id: 2,
      isPro: false,
      name: 'Leeroy Jenkins',
    },
  },
];

const history = createMemoryHistory();
const mockStore = configureStore();
const storeMockedData = {
  USER: {
    authorizationStatus: 'NO_AUTH',
  },
  DATA: {
    isDataError: false,
    offer: offer,
    reviews: reviews,
    nearbyOffers: [offer],
  },
};

describe('Room', () => {
  it('should render component', () => {
    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <Room offer={offer} reviews={reviews} nearbyOffers={[offer]} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Mocked map')).toBeInTheDocument();
    expect(screen.getByText('Mocked offers')).toBeInTheDocument();
    expect(screen.getByText('Mocked review list')).toBeInTheDocument();
  });
});
