import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import offerProp from './offer.prop';
import { getRatingInPercent } from '../../../utils';
import { OFFER_TYPES, CARD_TYPES, APP_ROUTES} from '../../../const';
import { useDispatch } from 'react-redux';
import { sendFavorite } from '../../../store/api-action';

const IMAGE_TYPES = {
  CITIES: {
    width: 260,
    height: 200,
  },
  FAVORITES: {
    width: 150,
    height: 110,
  },
};

function OfferCard(props) {
  const { offer, onMouseEnter, cardType } = props;

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

  return (
    <article className={`${cardType}${cardType === CARD_TYPES.CITIES ? '__place-card' : '__card'} place-card`}
      onMouseEnter={cardType === CARD_TYPES.CITIES ? () => onMouseEnter(id) : null}
      onMouseLeave={cardType === CARD_TYPES.CITIES ? () => onMouseEnter({}) : null}
    >
      {isPremium && cardType === CARD_TYPES.CITIES ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${APP_ROUTES.OFFER}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardType === CARD_TYPES.FAVORITES ? IMAGE_TYPES.FAVORITES.width : IMAGE_TYPES.CITIES.width}
            height={cardType === CARD_TYPES.FAVORITES ? IMAGE_TYPES.FAVORITES.height : IMAGE_TYPES.CITIES.height}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              isFavorite
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
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
};

export default React.memo(OfferCard);

