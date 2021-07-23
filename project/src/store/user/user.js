import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { logout, requireAuth, loadUserInfo } from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuth, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(loadUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});

export { user };
