import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Review from './review';
import reviewsProp from './review.prop';
import { FIRST_ELEMENT, MAX_REVIEWS } from '../../../const';

export default function ReviewsList({ reviews }) {
  return (
    <React.Fragment>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews
          .slice(FIRST_ELEMENT, MAX_REVIEWS)
          .reverse()
          .map((review) => <Review key={uuid()} review={review}/> )}
      </ul>
    </React.Fragment>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};
