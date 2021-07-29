import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import offerProp from './offer.prop';
import { getRatingInPercent } from '../../../utils';
import { OFFER_TYPES, CARD_TYPES, APP_ROUTES, MAIN_TYPE } from '../../../const';
import { useDispatch } from 'react-redux';
import { sendFavorite } from '../../../store/api-action';

function OfferCard(props) {
  const { offer, cardType = MAIN_TYPE, onMouseEnter = () => {}, onMouseLeave = () => {} } = props;

  const {
    isPremium,
    previewImage,
    price,
    isFavorite,
    id,
    title,
    type,
    rating,
  } = offer;

  const dispatch = useDispatch();
  const status = isFavorite ? '0' : '1';
  const bookmarkClasses = 'place-card__bookmark-button button';

  return (
    <article className={CARD_TYPES[cardType].PLACE_CARD}
      onMouseEnter={() => onMouseEnter(id)} onMouseLeave={onMouseLeave}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div className={CARD_TYPES[cardType].IMAGE_WRAPPER}>
        <Link to={`${APP_ROUTES.OFFER}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={CARD_TYPES[cardType].IMAGE.WIDTH}
            height={CARD_TYPES[cardType].IMAGE.HEIGHT}
            alt="Place"
          />
        </Link>
      </div>
      <div className={CARD_TYPES[cardType].CARD_INFO}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              isFavorite
                ? `${bookmarkClasses} place-card__bookmark-button--active`
                : bookmarkClasses
            }
            type="button"
            onClick={() => {
              dispatch(sendFavorite(id, status));
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingInPercent(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${APP_ROUTES.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{OFFER_TYPES[type]}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: offerProp,
  cardType: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default React.memo(OfferCard);

