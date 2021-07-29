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
const storeMockedData = {
  USER: {
    authorizationStatus: 'AUTH',
  },
};

describe('OfferCard', () => {
  it('should render correctly', () => {
    const cardType = 'FAVORITES';

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <FavoriteCard
            offer={offer}
            cardType={cardType}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`${offer.title}`)).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
    expect(screen.getByText(`€${offer.price}`)).toBeInTheDocument();
  });
});
