import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import HiddenSvg from '../svg/HiddenSvg';
import Header from '../blocks/header/Header';
import ReviewsList from '../blocks/review/ReviewsList';
import ReviewForm from '../blocks/review/ReviewForm';
import OffersList from '../blocks/offers/OffersList';
import Loading from '../blocks/loading/Loading';
import Map from '../blocks/map/Map';

import offersProp from '../blocks/offers/offer.prop';
import reviewsProp from '../blocks/review/review.prop';

import { getRatingInPercent } from '../../utils';
import { CARD_TYPES } from '../../const';

const NEAR_OFFERS_MAX = 3;

function Room(props) {
  const { offers, reviews, activeOffer, isDataLoaded } = props;
  const nearOffers = offers.slice(0, NEAR_OFFERS_MAX);
  const { id } = useParams();
  const filteredOffer = offers.find((offer) => offer.id === Number(id));

  if (!isDataLoaded) {
    return <Loading />;
  }

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
  } = filteredOffer;

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page">
        <Header loggedOut={false} />
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
                  <button className={
                    isFavorite
                      ? 'property__bookmark-button property__bookmark-button--active button'
                      : 'property__bookmark-button button'
                  } type="button"
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
                  <h2 className="reviews__title">
                    Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ReviewsList reviews={reviews} />
                  <ReviewForm />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map offers={offers} city={city} activeOffer={activeOffer} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <OffersList offers={nearOffers} type={CARD_TYPES.NEAR_PLACES}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

Room.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
  activeOffer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
  activeOffer: state.activeOffer,
  isDataLoaded: state.isDataLoaded,
});

export { Room };
export default connect(mapStateToProps)(Room);
