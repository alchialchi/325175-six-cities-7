import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

import UserInfo from './user-info';
import { APP_ROUTES } from '../../../const';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: UserInfo', () => {
  it('should render correctly', () => {
    const info = {
      email: 'john-doe@whatever.com',
    };
    const storeMockedData = {
      USER: {
        isOffline: false,
        userInfo: info,
        authorizationStatus: 'AUTH',
      },
    };

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <UserInfo />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/john-doe@whatever.com/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { href: APP_ROUTES.FAVORITES })).toBeInTheDocument();
  });
});
