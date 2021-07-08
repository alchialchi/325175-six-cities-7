export const AppRoute = {
  ROOT: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer',
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

export const SortType = {
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

export const OfferType = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export const CardType = {
  FAVORITES: 'favorites',
  CITIES: 'cities',
  NEAR_PLACES: 'near-places',
};
