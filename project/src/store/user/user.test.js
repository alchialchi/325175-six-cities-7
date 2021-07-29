import { user } from './user';
import { ActionType } from '../action';
import { AuthorizationStatus } from '../../const';

describe('User', () => {
  it('should return initial state by default', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      userInfo: {},
    };

    expect(user(undefined, {})).toEqual(initialState);
  });

  it('should update auth status to AUTH', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };
    const requireAuthAction = {
      type: ActionType.REQUIRE_AUTH,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requireAuthAction)).toEqual({ authorizationStatus: AuthorizationStatus.AUTH });
  });

  it('should update auth status to NO_AUTH', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
    };
    const requireAuthAction = {
      type: ActionType.REQUIRE_AUTH,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requireAuthAction)).toEqual({ authorizationStatus: AuthorizationStatus.NO_AUTH });
  });

  it('should update user info', () => {
    const state = {
      userInfo: {},
    };
    const userInfo = {
      email: 'test@test.com',
    };

    const loadUserInfoAction = {
      type: ActionType.LOAD_USER_INFO,
      payload: userInfo,
    };
    const expectedAction = {
      userInfo: userInfo,
    };

    expect(user(state, loadUserInfoAction)).toEqual(expectedAction);
  });
});
