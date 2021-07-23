import { NameSpace } from '../../const';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].getAuthorizationStatus;

export const getUser = (state) => state[NameSpace.USER].userInfo;
