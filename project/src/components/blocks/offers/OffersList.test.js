import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import OffersList from './OffersList';
import { offer } from '../../../mocks/offers';

const mockStore = configureStore();
const history = createMemoryHistory();

describe('OffersList', () => {
  it('should render correctly', () => {
    const storeMockedData = {
      PROCESS: {authorizationStatus: 'NO_AUTH'},
      DATA: { isOffersDataLoaded: true },
    };
    const type = 'MAIN';
    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <OffersList
            offers={[offer]}
            type={type}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Beautiful & luxurious studio at great location')).toBeInTheDocument();
  });
});
