import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import LogoutLink from './logout-link';

describe('LogoutLink component', () => {
  it('should render correctly', () => {
    const mockStore = configureStore();
    const history = createMemoryHistory();
    const storeMockedData = {
      USER: {
        authorizationStatus: 'AUTH',
        userInfo: {},
      },
    };

    const { getByText } = render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <LogoutLink />
        </Router>
      </Provider>,
    );

    expect(getByText('Sign out')).toBeInTheDocument();
  });
});
