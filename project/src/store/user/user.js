import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { userLogout, requireAuth, loadUserInfo, setIsOffline } from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
  isOffline: false,
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
    })
    .addCase(setIsOffline, (state, action) => {
      state.isOffline = action.payload;
    });
});

export { user };
