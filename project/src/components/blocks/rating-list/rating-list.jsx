import React from 'react';
import PropTypes from 'prop-types';

import { Rating } from '../../../const';
export default function RatingList({ onChange, rating }) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.keys(Rating).sort((a, b) => b - a).map((value, i) => (
        <React.Fragment key={value + i.toString()}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={`${value}-stars`}
            type="radio"
            onChange={onChange}
            checked={rating === value}
          />
          <label
            htmlFor={`${value}-stars`}
            className="reviews__rating-label form__rating-label"
            title={Rating[value]}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>);
}

RatingList.propTypes = {
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};
