import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import { createComment } from '../../../store/api-action';
import RatingList from '../rating-list/rating-list';
import Toast from '../toast/toast';
import { CommentLength, DEFAULT_RATING } from '../../../const';

function ReviewForm({ id }) {
  const dispatch = useDispatch();

  const initialState = {
    comment: '',
    rating: DEFAULT_RATING,
  };

  const [review, setReview] = useState(initialState);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSendingComment, setIsSendingComment] = useState(false);
  const [isSendingError, setIsSendingError] = useState(false);

  const { comment, rating } = review;

  const handleFormChange = () => {
    setIsSubmitDisabled(!(comment.length > CommentLength.MIN
      && comment.length < CommentLength.MAX
      && rating > 0
      && !isSendingComment));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    e.target.reset();

    if (isSubmitDisabled || isSendingComment) {
      return;
    }

    setIsSendingComment(true);
    setIsSubmitDisabled(true);

    dispatch(createComment(id, review))
      .then(() => {
        setIsSubmitDisabled(true);
        setIsSendingComment(false);
        setReview(initialState);
      })
      .catch(() => {
        setIsSendingComment(false);
        setIsSubmitDisabled(false);
        setIsSendingError(true);
      });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmitHandler}
      onChange={handleFormChange}
      onFocus={handleFormChange}
    >
      {isSendingError && <Toast />}
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
          disabled={isSubmitDisabled}
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
