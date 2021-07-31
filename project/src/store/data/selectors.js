import { NameSpace } from '../../const';

export const getOffers = (state) => state[NameSpace.DATA].offers;

export const getOffer = (state) => state[NameSpace.DATA].offer;

export const getReviews = (state) => state[NameSpace.DATA].reviews;

export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;

export const getFavorites = (state) => state[NameSpace.DATA].favorites;

export const getIsOffersDataLoaded = (state) => state[NameSpace.DATA].isOffersDataLoaded;

export const getIsOfferDataLoaded = (state) => state[NameSpace.DATA].isOfferDataLoaded;

export const getIsNearbyOffersDataLoaded = (state) => state[NameSpace.DATA].isNearbyOffersDataLoaded;

export const getIsReviewsDataLoaded = (state) => state[NameSpace.DATA].isReviewsDataLoaded;

export const getIsFavoritesDataLoaded = (state) => state[NameSpace.DATA].isFavoritesDataLoaded;

export const getIsDataError = (state) => state[NameSpace.DATA].isDataError;
