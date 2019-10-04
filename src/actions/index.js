import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CARD } from "./action-types"

export function addProductToCart(productId) {
  return { type: ADD_PRODUCT_TO_CART, productId }
};

export function removeProductFromCart(productId) {
  return { type: REMOVE_PRODUCT_FROM_CARD, productId }
};