export const ActionType = {
  ACTIVE_OFFER_ID: 'activeOffer',
  CHANGE_CITY: 'city/changeCity',
  SORT: 'sort/setSort',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setActiveOfferId: (id) => ({
    type: ActionType.ACTIVE_OFFER_ID,
    payload: id,
  }),
  sort: (sortType) => ({
    type: ActionType.SORT,
    payload: sortType,
  }),
};
