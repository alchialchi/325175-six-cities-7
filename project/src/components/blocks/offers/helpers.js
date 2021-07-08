import { CardType } from '../../../const';

export const getClassByType = (type) => {
  switch (type) {
    case CardType.FAVORITES:
      return `${type}__places`;
    case CardType.NEAR_PLACES:
      return `${type}__list places__list`;
    default:
      return `${type}__places-list places__list tabs__content`;
  }
};

export const GetImageType = {
  CITIES: {
    width: 260,
    height: 200,
  },
  FAVORITES: {
    width: 150,
    height: 110,
  },
};
