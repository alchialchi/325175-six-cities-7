export const ActionType = {
  CHANGE_CITY: 'CHANGE CITY',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};
