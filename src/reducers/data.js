import { actionTypes } from '../actions/data';

const initialState = [{
  id: 1,
  isManaged: false,
  unlockManagerPrice: 10000,
  unlock: false,
  unlockPricing: 0,
  multi: 1,
  name: 'lemon',
  startPrice: 1,
  curentPrice: 1,
  price: 1000,
  timeFactory: 1000,
  totalCostFactoryUnit: 2.65,
  image: 'https://image.flaticon.com/icons/png/512/1073/1073259.png'
}, {
  id: 2,
  isManaged: false,
  unlockManagerPrice: 20000,
  unlock: false,
  unlockPricing: 500,
  multi: 1,
  name: 'lemonade',
  startPrice: 20,
  curentPrice: 20,
  price: 1000,
  timeFactory: 1000,
  totalCostFactoryUnit: 50,
  image: 'https://image.flaticon.com/icons/png/512/4882/4882629.png'
}, {
  id: 3,
  isManaged: false,
  unlockManagerPrice: 150000,
  unlock: false,
  unlockPricing: 2000,
  multi: 1,
  name: 'newspaper',
  startPrice: 60,
  curentPrice: 60,
  price: 1000,
  timeFactory: 5000,
  totalCostFactoryUnit: 120,
  image: 'https://image.flaticon.com/icons/png/512/595/595533.png'
}, {
  id: 4,
  isManaged: false,
  unlockManagerPrice: 1000000,
  unlock: false,
  unlockPricing: 100000,
  multi: 1,
  name: 'car',
  price: 1000,
  startPrice: 1000,
  curentPrice: 1000,
  timeFactory: 10000,
  totalCostFactoryUnit: 160000,
  image: 'https://image.flaticon.com/icons/png/512/741/741407.png'
}];

const unlockProduct = (state, itemID) => {
  const stateUpdated = [...state];
  console.log(itemID);
  const index = stateUpdated.findIndex((item) => item.id === itemID);

  stateUpdated[index].unlock = true;

  return stateUpdated;
};

const upgradeProduct = (state, itemID) => {
  const stateUpdated = [...state];
  console.log(itemID);
  const index = stateUpdated.findIndex((item) => item.id === itemID);

  stateUpdated[index].multi += 1;
  stateUpdated[index].totalCostFactoryUnit *= stateUpdated[index].multi;
  stateUpdated[index].curentPrice = (
    stateUpdated[index].multi * stateUpdated[index].startPrice * 1.8);

  return stateUpdated;
};

const unlockManager = (state, itemID) => {
  const stateUpdated = [...state];
  const index = stateUpdated.findIndex((item) => item.id === itemID);

  stateUpdated[index].isManaged = true;

  return stateUpdated;
};

const data = (state = initialState, action) => {
  console.log(action.itemID);
  switch (action.type) {
    case actionTypes.UNLOCK_MANAGER:
      return unlockManager(state, action.itemID);
    case actionTypes.UNLOCK_PRODUCT:
      return unlockProduct(state, action.itemID);
    case actionTypes.UPGRADE_PRODUCT:
      return upgradeProduct(state, action.itemID);
    default:
      return state;
  }
};

export default data;
