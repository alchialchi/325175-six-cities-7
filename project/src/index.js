import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { createAPI } from './services/api';
import { checkAuth, fetchOffersList } from './store/api-action';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import { requireAuth } from './store/action';
import { redirect } from './store/middlewares/redirect';
import { AuthorizationStatus } from './const';
import { Router as BrowserRouter } from 'react-router-dom';
import browserHistory from './services/browser-history';

const api = createAPI(
  () => store.dispatch(requireAuth(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
