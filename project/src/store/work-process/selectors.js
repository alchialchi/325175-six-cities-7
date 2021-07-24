import { NameSpace } from '../../const';

export const getCity = (state) => state[NameSpace.PROCESS].city;

export const getCities = (state) => state[NameSpace.PROCESS].cities;

export const getSortType = (state) => state[NameSpace.PROCESS].sortType;

export const getActiveOffer = (state) => state[NameSpace.PROCESS].activeOffer;
