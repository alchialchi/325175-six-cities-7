import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import MainPage from './main-page';

jest.mock('../../blocks/header/header', () => ({
  __esModule: true,
  default() {
    return <div>Header</div>;
  },
}));

jest.mock('../../blocks/cities/cities', () => ({
  __esModule: true,
  default() {
    return <div>Cities</div>;
  },
}));

jest.mock('../../blocks/locations/locations-list', () => ({
  __esModule: true,
  default() {
    return <div>LocationsList</div>;
  },
}));

jest.mock('../../blocks/loading/loading', () => ({
  __esModule: true,
  default() {
    return <div>Loading</div>;
  },
}));

const history = createMemoryHistory();
const mockStore = configureStore();
const offers = [
  {id: 1, city: {name: 'Paris'}},
  {id: 2, city: {name: 'Paris'}},
  {id: 3, city: {name: 'Paris'}},
];

describe('Main Page', () => {
  it('should render correctly', () => {
    const storeMockedData = {
      DATA: {
        offers: offers,
        isOffersDataLoaded: true,
      },
      PROCESS: {
        city: 'Paris',
        sortType: { name: 'default', text: 'Popular' },
        activeOffer: offers[0].id,
      },
      USER: {
        isOffline: false,
      },
    };

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('LocationsList')).toBeInTheDocument();
  });

  it('should render correctly without offers', () => {
    const storeMockedData = {
      DATA: {
        offers: [],
        isOffersDataLoaded: false,
      },
      PROCESS: {
        city: 'Paris',
        sortType: { name: 'default', text: 'Popular' },
        activeOffer: null,
      },
      USER: {
        isOffline: false,
      },
    };

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
});
