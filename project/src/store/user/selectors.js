import { NameSpace } from '../../const';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const getUser = (state) => state[NameSpace.USER].userInfo;

export const getIsOffline = (state) => state[NameSpace.USER].isOffline;
