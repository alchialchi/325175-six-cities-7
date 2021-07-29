import { redirect } from './redirect';
import { redirectToRoute } from '../action';
import { APP_ROUTES } from '../../const';

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
    const action = redirectToRoute(APP_ROUTES.ROOT);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('route should be added to fakeHistory', () => {
    const { invoke } = mockRedux();
    invoke(redirectToRoute(APP_ROUTES.SIGN_IN));
    expect(fakeHistory.location.pathname).toBe(APP_ROUTES.SIGN_IN);

    invoke(redirectToRoute(APP_ROUTES.ROOT));
    expect(fakeHistory.location.pathname).toBe(APP_ROUTES.ROOT);

    invoke(redirectToRoute(APP_ROUTES.NOT_FOUND));
    expect(fakeHistory.location.pathname).toBe(APP_ROUTES.NOT_FOUND);
  });

  it('should not redirect because wrong action', () => {
    const url = '/test';
    const { invoke } = mockRedux();
    invoke({ type: 'TEST_ACTION', payload: url });
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
