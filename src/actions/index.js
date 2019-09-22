import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CARD } from "./action-types"

export function addProductToCart(product) {
  return { type: ADD_PRODUCT_TO_CART, product }
};

export function removeProductFromCart(product) {
  return { type: REMOVE_PRODUCT_FROM_CARD, product }
};