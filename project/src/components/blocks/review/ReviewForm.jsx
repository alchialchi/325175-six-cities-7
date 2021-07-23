import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import { createComment } from '../../../store/api-action';
import RatingList from '../rating/RatingList';

function ReviewForm({ id }) {
  const dispatch = useDispatch();

  const initialState = {
    comment: '',
    rating: '',
  };

  const [review, setReview] = useState(initialState);
  const { comment, rating } = review;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    e.target.reset();

    dispatch(createComment(id, review));
    setReview(initialState);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingList rating={rating} onChange={(e) => setReview({ ...review, rating: e.target.value })}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(e) => setReview({ ...review, comment: e.target.value })}
        value={comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
        >
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.number,
};

export default ReviewForm;
