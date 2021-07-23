import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchOffer, fetchNearbyOffers, fetchReviews } from '../../../store/api-action';
import { useParams } from 'react-router-dom';

import reviewProp from '../../blocks/review/review.prop';
import offerProp from '../../blocks/offers/offer.prop';
import Loading from '../../blocks/loading/Loading';
import Room from './Room';
import { getIsNearbyOffersDataLoaded, getIsOfferDataLoaded, getIsReviewsDataLoaded, getOffer, getNearbyOffers, getReviews } from '../../../store/data/selectors';

function RoomPage(props) {
  const {
    offer,
    reviews,
    nearbyOffers,
    isNearbyOffersLoaded,
    isOfferLoaded,
    isReviewsLoaded,
    getOfferData,
    getNearbyData,
    getReviewsData,
  } = props;

  const offerId = parseInt(useParams().id, 10);

  useEffect(() => {
    getOfferData(offerId);
    getNearbyData(offerId);
    getReviewsData(offerId);
  }, [getNearbyData, getOfferData, getReviewsData, offerId]);

  const isDataLoaded = isNearbyOffersLoaded && isOfferLoaded && isReviewsLoaded;

  if (!isDataLoaded) {
    return <Loading />;
  }

  return <Room reviews={reviews} nearbyOffers={nearbyOffers} offer={offer} />;
}

RoomPage.propTypes = {
  offer: PropTypes.object,
  reviews: PropTypes.arrayOf(reviewProp),
  nearbyOffers: PropTypes.arrayOf(offerProp),
  getNearbyData: PropTypes.func,
  getReviewsData: PropTypes.func,
  getOfferData: PropTypes.func.isRequired,
  isNearbyOffersLoaded: PropTypes.bool,
  isOfferLoaded: PropTypes.bool,
  isReviewsLoaded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  reviews: getReviews(state),
  nearbyOffers: getNearbyOffers(state),
  isNearByOffersLoaded: getIsNearbyOffersDataLoaded(state),
  isOfferLoaded: getIsOfferDataLoaded(state),
  isReviewsLoaded: getIsReviewsDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  getOfferData(id) {
    dispatch(fetchOffer(id));
  },
  getNearbyData(id) {
    dispatch(fetchNearbyOffers(id));
  },
  getReviewsData(id) {
    dispatch(fetchReviews(id));
  },
});

export { RoomPage };
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
