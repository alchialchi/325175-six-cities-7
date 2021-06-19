import React from 'react';
import PropTypes from 'prop-types';

import { RATINGS } from '../../../const';

export default function RatingList({ onChange }) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.keys(RATINGS).reverse().map((key, i) => (
        <React.Fragment key={key + i.toString()}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={RATINGS[key]}
            id={`${key}-stars`}
            type="radio"
            onChange={onChange}
          />
          <label
            htmlFor={`${key}-stars`}
            className="reviews__rating-label form__rating-label"
            title={RATINGS[key]}
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
};
