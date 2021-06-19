import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Review from './Review';
import reviewsProp from './review.prop';

export default function ReviewsList({ reviews }) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={uuid()} review={review}/> )}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};
