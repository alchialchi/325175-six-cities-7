import React from 'react';
import PropTypes from 'prop-types';

export default function LocationItem(props) {
  const { city } = props;

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="/#">
        <span>{city}</span>
      </a>
    </li>
  );
}

LocationItem.propTypes = {
  city: PropTypes.string.isRequired,
};
