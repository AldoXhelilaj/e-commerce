import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector([selectShop], (shop) => shop);

export const shopItemsObjects = createSelector(
  [selectShopItems],

  (shop) => Object.values(shop)
);

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectCollection = (collectionUrl) =>
  createSelector([selectShopItems], (shop) => shop[collectionUrl]);
