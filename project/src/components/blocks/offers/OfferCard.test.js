import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import OfferCard from './OfferCard';
import { offer } from '../../../mocks/offers';

const history = createMemoryHistory();
const mockStore = configureStore();
const storeMockedData = {
  USER: {
    authorizationStatus: 'NO_AUTH',
  },
};

describe('OfferCard', () => {
  it('should render correctly', () => {
    const cardType = 'cities';
    const onMouseEnter = jest.fn();

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <OfferCard
            offer={offer}
            cardType={cardType}
            onMouseEnter={onMouseEnter}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`${offer.title}`)).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
    expect(screen.getByText(`€${offer.price}`)).toBeInTheDocument();
    userEvent.hover(screen.getByRole('article'));
    expect(onMouseEnter).toHaveBeenCalledWith(offer.id);
  });
});
