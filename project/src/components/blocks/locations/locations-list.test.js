import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LocationsList from './locations-list';
import { CITIES } from '../../../const';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: LocationsList', () => {
  it('should render correctly', () => {
    const storeMockedData = {
      DATA: {
        offers: [],
        isOffersDataLoaded: false,
      },
      PROCESS: {
        cities: Object.values(CITIES),
      },
    };

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <LocationsList />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('link', { name: 'Paris', class: 'tabs__item--active' })).toBeInTheDocument();
  });
});
