import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Cities from './Cities';
import { offers } from '../../../mocks/offers';

const mockStore = configureStore();
const history = createMemoryHistory();
const storeMockedData = {
  PROCESS: {
    city: 'Paris',
    sortType: 'DEFAULT',
  },
  DATA: {
    offers: offers,
    isOffersDataLoaded: true,
  },
};

describe('Cities', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <Cities />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('2 places to stay in Paris')).toBeInTheDocument();
  });
});
