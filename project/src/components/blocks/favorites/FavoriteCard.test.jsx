import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import FavoriteCard from './FavoriteCard';
import { offer } from '../../../mocks/offers';

const history = createMemoryHistory();
const mockStore = configureStore();
const offers = [{
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
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
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/test.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
}];

const storeMockedData = {
  USER: {
    authorizationStatus: 'AUTH',
  },
  PROCESS: {
    city: 'Paris',
  },
  DATA: {
    isOffersDataLoaded: true,
  },
};

const city = 'Amsterdam';

describe('OfferCard', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <FavoriteCard
            key={city}
            favoriteHotels={offers}
            favoritesCity={city}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`${offer.title}`)).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
    expect(screen.getByText(`€${offer.price}`)).toBeInTheDocument();
  });
});
