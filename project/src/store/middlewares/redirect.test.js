import { redirect } from './redirect';
import { redirectToRoute } from '../action';
import { AppRoute } from '../../const';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return { store, next, invoke };
};

const fakeHistory = {
  location: {pathname: ''},
  push(path) {
    this.location.pathname = path;
  },
};

jest.mock('../../services/browser-history', () => fakeHistory);

describe('Middleware: redirect', () => {
  it('action should passes to next middleware', () => {
    const { invoke, next } = mockRedux();
    const action = redirectToRoute(AppRoute.ROOT);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('route should be added to fakeHistory', () => {
    const { invoke } = mockRedux();
    invoke(redirectToRoute(AppRoute.SIGN_IN));
    expect(fakeHistory.location.pathname).toBe(AppRoute.SIGN_IN);

    invoke(redirectToRoute(AppRoute.ROOT));
    expect(fakeHistory.location.pathname).toBe(AppRoute.ROOT);

    invoke(redirectToRoute(AppRoute.NOT_FOUND));
    expect(fakeHistory.location.pathname).toBe(AppRoute.NOT_FOUND);
  });

  it('should not redirect because wrong action', () => {
    const url = '/test';
    const { invoke } = mockRedux();
    invoke({ type: 'TEST_ACTION', payload: url });
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
