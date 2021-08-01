import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AppRoute } from '../../const';
import App from './app';

jest.mock('../pages/favorites/favorites', () => ({
  __esModule: true,
  default() {
    return <>Favorites Screen</>;
  },
}));

jest.mock('../pages/main-page/main-page', () => ({
  __esModule: true,
  default() {
    return <>Main Screen</>;
  },
}));

jest.mock('../pages/sign-in/sign-in', () => ({
  __esModule: true,
  default() {
    return <>SignIn Screen</>;
  },
}));

jest.mock('../pages/room-page/room-page', () => ({
  __esModule: true,
  default() {
    return <>Room Screen</>;
  },
}));

jest.mock('../pages/not-found/not-found', () => ({
  __esModule: true,
  default() {
    return <>NotFound Screen</>;
  },
}));

const history = createMemoryHistory();
const mockedStore = configureStore();
const mockedStoreData = {
  USER: { authorizationStatus: 'NO_AUTH' },
  DATA: { isOffersDataLoaded: true },
};

describe('Application Routing', () => {
  it('should render Main screen when navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(
      <Provider store={mockedStore(mockedStoreData)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Main Screen')).toBeInTheDocument();
  });

  it.only('should render SignIn screen when navigate to "/login"', () => {
    history.push(AppRoute.SIGN_IN);
    render(
      <Provider store={mockedStore(mockedStoreData)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('SignIn Screen')).toBeInTheDocument();
  });

  it('should render Room screen when navigate to /offer/:id route', () => {
    const fakeId = 1;
    history.push(`${AppRoute.OFFER}/${fakeId}`);
    render(
      <Provider store={mockedStore(mockedStoreData)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Room Screen')).toBeInTheDocument();
  });

  it('should render Favorite screen when navigate to "/favorites" with successful authorization', () => {
    history.push(AppRoute.FAVORITES);
    render(
      <Provider store={mockedStore(
        {
          USER: { authorizationStatus: 'NO_AUTH' },
          DATA: { isOffersDataLoaded: true },
        },
      )}
      >,
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Favorites Screen/i)).toBeInTheDocument();
  });

  it('should render SignIn screen when navigate to "/favorites" with no authorization', () => {
    history.push(AppRoute.FAVORITES);
    render(
      <Provider store={mockedStore(mockedStoreData)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('SignIn Screen')).toBeInTheDocument();
  });

  it('should render Main Page when navigate to "/login" with successful authorization', () => {
    history.push(AppRoute.ROOT);
    history.push(AppRoute.SIGN_IN);

    render(
      <Provider store={mockedStore(
        {
          USER: { authorizationStatus: 'AUTH' },
          DATA: { isOffersDataLoaded: true },
        },
      )}
      >,
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Main Screen/i)).toBeInTheDocument();
  });

  it('should render 404 screen when navigate to "/404"', () => {
    history.push(AppRoute.NOT_FOUND || '/non-existent path');
    render(
      <Provider store={mockedStore(mockedStoreData)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('NotFound Screen')).toBeInTheDocument();
  });
});
