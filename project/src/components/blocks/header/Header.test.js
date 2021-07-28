import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Header from './Header';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Header', () => {
  it('should render correctly with no authorization', () => {
    const storeMockedData = {
      USER: {
        authorizationStatus: 'NO_AUTH',
        userInfo: {},
      },
    };

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should render correctly with authorization', () => {
    const storeMockedData = {
      USER: {
        authorizationStatus: 'AUTH',
        userInfo: {},
      },
    };

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
});
