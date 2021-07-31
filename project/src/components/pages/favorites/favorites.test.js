import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import Favorites from './favorites';
import { offer } from '../../../mocks/offers';

jest.mock('../../blocks/header/header', () => ({
  __esModule: true,
  default() {
    return <div>Header</div>;
  },
}));

const history = createMemoryHistory();
const mockStore  = configureStore();

describe('Favorites page', () => {
  it('should render correctly', () => {
    const storeMockedData = {
      DATA: {
        favorites: [offer],
        isFavoritesDataLoaded: true,
      },
      PROCESS: { city: 'Paris' },
      USER: {
        isOffline: false,
      },
    };

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <Favorites />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Header/i)).toBeInTheDocument();
    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(dispatch).toBeCalled();
  });

  it('should render correctly without offers', () => {
    const storeMockedData = {
      DATA: {
        favorites: [],
        isFavoritesDataLoaded: true,
      },
      PROCESS: { city: 'Paris' },
      USER: {
        isOffline: false,
      },
    };

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <Favorites />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('main')).toHaveClass('page__main--favorites-empty page__main page__main--favorites', {exact: true});
  });
});
