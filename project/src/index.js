import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createAPI } from './services/api';
import { checkAuth, fetchOffersList } from './store/api-action';

import App from './components/app/app';
import { reducer } from './store/reducer';
import { ActionCreator } from './store/action';
import { redirect } from './store/middlewares/redirect';
import { AuthorizationStatus } from './const';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuth(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
