import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const QUANTITY_OFFERS = 6;

const offers = new Array(QUANTITY_OFFERS).fill('card-').map((value, index) => ({id: value + index}));

ReactDOM.render(
  <React.StrictMode>
    <App data={offers} />
  </React.StrictMode>,
  document.getElementById('root'));
