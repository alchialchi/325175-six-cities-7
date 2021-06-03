import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main/main';

function App(props) {
  const { data } = props;

  return (
    <MainPage offers={data}/>
  );
}

App.propTypes = {
  data: PropTypes.array.isRequired,
};

export default App;
