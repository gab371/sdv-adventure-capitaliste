export const actionTypes = {
  UNLOCK_PRODUCT: 'UNLOCK_PRODUCT',
  UNLOCK_MANAGER: 'UNLOCK_MANAGER',
  UPGRADE_PRODUCT: 'UPGRADE_PRODUCT'
};

export const unlockProduct = (itemID) => ({
  type: actionTypes.UNLOCK_PRODUCT,
  itemID
});

export const unlockManager = (itemID) => ({
  type: actionTypes.UNLOCK_MANAGER,
  itemID
});

export const upgradeProduct = (itemID) => ({
  type: actionTypes.UPGRADE_PRODUCT,
  itemID
});
