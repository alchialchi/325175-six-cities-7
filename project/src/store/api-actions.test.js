import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { checkAuth, createComment, fetchFavorites, fetchNearbyOffers, fetchOffer, fetchOffersList, fetchReviews, login, logout, sendFavorite } from './api-action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { ActionType } from './action';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{ fake: true }]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTH,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = { email: 'test@test.ru', password: '123456' };
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{ fake: true }]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_USER_INFO,
          payload: {
            0: { fake: true },
          },
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRE_AUTH,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onDelete(APIRoute.LOG_OUT)
      .reply(204);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOG_OUT,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelListLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [{ fake: true }]);

    return hotelListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{ fake: true }],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const hotelLoader = fetchOffer(fakeId);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${fakeId}`)
      .reply(200, { fake: true });

    return hotelLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: { fake: true },
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const nearbyListLoader = fetchNearbyOffers(fakeId);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${fakeId}/nearby`)
      .reply(200, [{fake: true}]);

    return nearbyListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY,
          payload: [{ fake: true }],
        });
      });
  });

  it('should make a correct API call to GET /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const reviewsListLoader = fetchReviews(fakeId);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${fakeId}`)
      .reply(200, [{ fake: true }]);

    return reviewsListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{ fake: true }],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesListLoader = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [{ fake: true }]);

    return favoritesListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{ fake: true }],
        });
      });
  });

  it('should make a correct API call to Post /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeMessage = {
      comment: 'Test msg',
      rating: 5,
    };
    const createCommentLoader = createComment(fakeId, fakeMessage);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${fakeId}`, fakeMessage)
      .reply(200, [{ fake: true }]);

    return createCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{ fake: true }],
        });
      });
  });

  it('should make a correct API call to POST /favorite/:hotel_id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeStatus = 1;
    const sendFavoriteLoader = sendFavorite(fakeId, fakeStatus);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${fakeId}/${fakeStatus}`)
      .reply(200, { fake: true });

    return sendFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_DATA,
          payload: { fake: true },
        });
      });
  });
});
