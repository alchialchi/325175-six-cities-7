import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import HiddenSvg from '../../svg/hidden-svg';
import Header from '../header/header';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import Toast from '../toast/toast';

import offerProp from '../offer-card/offer.prop';
import reviewsProp from '../review/review.prop';

import { getRatingInPercent } from '../../../utils';
import { AlertMessage, AuthorizationStatus, NEARBY_TYPE } from '../../../const';
import { getAuthorizationStatus, getIsOffline } from '../../../store/user/selectors';
import { getIsDataError } from '../../../store/data/selectors';
import { sendFavorite } from '../../../store/api-action';

function Room(props) {
  const {
    offer,
    reviews,
    nearbyOffers,
  } = props;

  const {
    isPremium,
    isFavorite,
    title,
    rating,
    price,
    bedrooms,
    maxAdults,
    goods,
    type,
    images,
    host,
    description,
    city,
    id,
  } = offer;

  const dispatch = useDispatch();
  const isOffline = useSelector(getIsOffline);
  const isDataError = useSelector(getIsDataError);
  const status = isFavorite ? '0' : '1';
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page">
        <Header />
        {isOffline && <Toast message={AlertMessage.OFFLINE} />}
        {isDataError && <Toast />}
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img
                      className="property__image"
                      src={image}
                      alt="Studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button
                    className={`${isFavorite ? 'property__bookmark-button--active' : ''} property__bookmark-button button`}
                    type="button"
                    onClick={() => {
                      dispatch(sendFavorite(id, status, true));
                    }}
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: getRatingInPercent(rating) }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li className="property__inside-item" key={good}>{good}</li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{host.name}</span>
                    <span className="property__user-status">{host.isPro}</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList reviews={reviews} />
                  {isAuthorized && <ReviewForm id={id} />}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map offers={[offer, ...nearbyOffers]} city={city} activeOffer={offer.id} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <OffersList offers={nearbyOffers} type={NEARBY_TYPE}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

Room.propTypes = {
  ...offerProp,
  offer: PropTypes.shape(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default React.memo(Room);
