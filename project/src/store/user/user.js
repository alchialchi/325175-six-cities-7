import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { userLogout, requireAuth, loadUserInfo } from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuth, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(userLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(loadUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});

export { user };
