import React from 'react';
import { getRatingInPercent } from '../../../utils';
import reviewProp from './review.prop';

export default function Review({ review }) {
  const { user, rating, date, comment } = review;
  const { avatarUrl, name } = user;

  const formatDate = new Intl.DateTimeFormat('en-Us', {
    year: 'numeric',
    month: 'long',
  }).format(new Date(date));

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRatingInPercent(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          {formatDate}
        </time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: reviewProp,
};

