import React from 'react';
import PropTypes from 'prop-types';
import { SORT_TYPES } from '../../../const';

function SortItem({ type, isActive, onClick }) {
  return (
    <li
      className={`places__option ${isActive ? 'places__option--active' : ''}`}
      tabIndex="0"
      onClick={() => onClick(SORT_TYPES[type])}
    >
      {SORT_TYPES[type].text}
    </li>
  );
}

SortItem.propTypes = {
  type: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SortItem;
