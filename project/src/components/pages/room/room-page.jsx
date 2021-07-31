import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchOffer, fetchNearbyOffers, fetchReviews } from '../../../store/api-action';
import {
  getIsNearbyOffersDataLoaded,
  getIsOfferDataLoaded,
  getIsReviewsDataLoaded,
  getOffer,
  getNearbyOffers,
  getReviews
} from '../../../store/data/selectors';
import Loading from '../../blocks/loading/loading';
import Room from './room';

function RoomPage() {
  const offerId = parseInt(useParams().id, 10);
  const dispatch = useDispatch();
  const offer = useSelector(getOffer);
  const reviews = useSelector(getReviews);
  const nearbyOffers = useSelector(getNearbyOffers);
  const isNearbyOffersDataLoaded = useSelector(getIsNearbyOffersDataLoaded);
  const isOfferDataLoaded = useSelector(getIsOfferDataLoaded);
  const isReviewsDataLoaded = useSelector(getIsReviewsDataLoaded);

  useEffect(() => {
    dispatch(fetchOffer(offerId));
    dispatch(fetchNearbyOffers(offerId));
    dispatch(fetchReviews(offerId));
  }, [offerId, dispatch]);

  const isDataLoaded = isNearbyOffersDataLoaded && isOfferDataLoaded && isReviewsDataLoaded;

  if (!isDataLoaded) {
    return <Loading />;
  }

  return <Room reviews={reviews} nearbyOffers={nearbyOffers} offer={offer} />;
}

export default RoomPage;
