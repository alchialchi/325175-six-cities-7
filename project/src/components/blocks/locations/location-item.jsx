import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../const';

export default function LocationItem({ isActive, name, onClick }) {
  return (
    <li className="locations__item">
      <Link
        className={`${isActive ? 'tabs__item--active' : ''} locations__item-link tabs__item`}
        to={APP_ROUTES.ROOT}
        onClick={() => onClick(name)}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}

LocationItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
