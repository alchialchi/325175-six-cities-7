import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Review from './Review';
import reviewsProp from './review.prop';

export default function ReviewsList({ reviews }) {
  return (
    <React.Fragment>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={uuid()} review={review}/> )}
      </ul>
    </React.Fragment>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};
