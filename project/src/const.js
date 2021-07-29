export const APP_ROUTES = {
  ROOT: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer',
  NOT_FOUND: '/not-found',
};

export const API_ROUTES = {
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOG_OUT: '/logout',
  COMMENTS: '/comments',
  FAVORITE: '/favorite',
};

export const MAX_RATING = 5;

export const RATINGS = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

const ZOOM = 10;

export const CITIES = {
  PARIS: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: ZOOM,
    },
  },
  COLOGNE: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: ZOOM,
    },
  },
  BRUSSELS: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: ZOOM,
    },
  },
  AMSTERDAM: {
    name: 'Amsterdam',
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: ZOOM,
    },
  },
  HAMBURG: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: ZOOM,
    },
  },
  DUSSELDORF: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: ZOOM,
    },
  },
};

export const SORT_TYPES = {
  DEFAULT: {
    name: 'default',
    text: 'Popular',
  },
  LOW_TO_HIGH: {
    name: 'lowPrice',
    text: 'Price: low to high',
  },
  HIGH_TO_LOW: {
    name: 'highPrice',
    text: 'Price: high to low',
  },
  TOP_RATED: {
    name: 'topRated',
    text: 'Top rated first',
  },
};

export const OFFER_TYPES = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export const CARD_TYPES = {
  MAIN: {
    PLACE_CARD: 'cities__place-card place-card',
    IMAGE_WRAPPER: 'cities__image-wrapper place-card__image-wrapper',
    CARD_INFO: 'place-card__info',
    IMAGE: {
      WIDTH: 260,
      HEIGHT: 200,
    },
  },
  FAVORITES: {
    PLACE_CARD: 'favorites__card place-card',
    IMAGE_WRAPPER: 'favorites__image-wrapper place-card__image-wrapper',
    CARD_INFO: 'favorites__card-info place-card__info',
    IMAGE: {
      WIDTH: 150,
      HEIGHT: 110,
    },
  },
  NEARBY: {
    PLACE_CARD: 'near-places__card place-card',
    IMAGE_WRAPPER: 'near-places__image-wrapper place-card__image-wrapper',
    CARD_INFO: 'place-card__info',
    IMAGE: {
      WIDTH: 260,
      HEIGHT: 200,
    },
  },
};

export const CARD_LIST_TYPES = {
  MAIN: {
    LIST: 'cities__places-list places__list tabs__content',
  },
  NEARBY: {
    LIST: 'near-places__list places__list',
  },
};

export const MAIN_TYPE = 'MAIN';
export const FAVORITES_TYPE = 'FAVORITES';
export const NEARBY_TYPE = 'NEARBY';

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const NameSpace = {
  DATA: 'DATA',
  PROCESS: 'PROCESS',
  USER: 'USER',
};
