import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { APP_ROUTES } from '../../const';
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

jest.mock('../pages/room/room-page', () => ({
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
    history.push(APP_ROUTES.ROOT);
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
    history.push(APP_ROUTES.SIGN_IN);
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
    history.push(`${APP_ROUTES.OFFER}/${fakeId}`);
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
    history.push(APP_ROUTES.FAVORITES);
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
    history.push(APP_ROUTES.FAVORITES);
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
    history.push(APP_ROUTES.ROOT);
    history.push(APP_ROUTES.SIGN_IN);

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
    history.push(APP_ROUTES.NOT_FOUND || '/non-existent path');
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
