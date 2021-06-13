export const actionTypes = {
  ADD_MONEY: 'ADD_MONEY',
  REMOVE_MONEY: 'REMOVE_MONEY'
};

export const addMoney = (money) => ({
  type: actionTypes.ADD_MONEY,
  money
});

export const removeMoney = (money) => ({
  type: actionTypes.REMOVE_MONEY,
  money
});
