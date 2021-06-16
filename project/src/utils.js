import { MAX_RATING } from './const';

export const getRatingInPercent = (rating) => `${rating / MAX_RATING * 100}%`;
