import {
  ActionType,
  changeCity,
  loadFavorites,
  loadNearby,
  loadOffer,
  loadOffers,
  loadReviews,
  loadUserInfo,
  logout,
  redirectToRoute,
  requireAuth,
  setActiveOfferId,
  sort,
  updateData
} from './action';

describe('Actions', () => {
  it('change city action creator should return correct action', () => {
    const city = 'Paris';
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };

    expect(changeCity(city)).toEqual(expectedAction);
  });

  it('set active offer action creator should return correct action', () => {
    const id = '1';
    const expectedAction = {
      type: ActionType.ACTIVE_OFFER_ID,
      payload: id,
    };

    expect(setActiveOfferId(id)).toEqual(expectedAction);
  });

  it('sort action creator should return correct action', () => {
    const sortType = {
      name: 'default',
      text: 'Popular',
    };
    const expectedAction = {
      type: ActionType.SORT,
      payload: sortType,
    };

    expect(sort(sortType)).toEqual(expectedAction);
  });

  it('load offers action creator should return correct action', () => {
    const offers = [{}, {}, {}];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('offer action creator should return correct action', () => {
    const offer = {};
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };

    expect(loadOffer(offer)).toEqual(expectedAction);
  });

  it('load reviews action creator should return correct action', () => {
    const reviews = [{}, {}, {}];
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(loadReviews(reviews)).toEqual(expectedAction);
  });

  it('load nearby offers action creator should return correct action', () => {
    const nearbyOffers = [{}, {}, {}];
    const expectedAction = {
      type: ActionType.LOAD_NEARBY,
      payload: nearbyOffers,
    };

    expect(loadNearby(nearbyOffers)).toEqual(expectedAction);
  });

  it('require auth action creator should return correct action', () => {
    const status = 'NO_AUTH';
    const expectedAction = {
      type: ActionType.REQUIRE_AUTH,
      payload: status,
    };

    expect(requireAuth(status)).toEqual(expectedAction);
  });

  it('user logout action creator should return correct action', () => {
    const expectedAction = {
      type: ActionType.LOG_OUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('redirect action creator should return correct action', () => {
    const route = '/login';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: route,
    };

    expect(redirectToRoute(route)).toEqual(expectedAction);
  });

  it('load user info action creator should return correct action', () => {
    const userInfo = {};
    const expectedAction = {
      type: ActionType.LOAD_USER_INFO,
      payload: userInfo,
    };

    expect(loadUserInfo(userInfo)).toEqual(expectedAction);
  });

  it('load favorites action creator should return correct action', () => {
    const favorites = [{}, {}, {}];
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites,
    };

    expect(loadFavorites(favorites)).toEqual(expectedAction);
  });

  it('update data action creator should return correct action', () => {
    const data = {};
    const expectedAction = {
      type: ActionType.UPDATE_DATA,
      payload: data,
    };
    expect(updateData(data)).toEqual(expectedAction);
  });
});
