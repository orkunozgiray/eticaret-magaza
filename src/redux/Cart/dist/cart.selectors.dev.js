"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCartTotal = exports.selectCartItemsCount = exports.selectCartItems = exports.selectCartData = void 0;

var _reselect = require("reselect");

var selectCartData = function selectCartData(state) {
  return state.cartData;
};

exports.selectCartData = selectCartData;
var selectCartItems = (0, _reselect.createSelector)([selectCartData], function (cartData) {
  return cartData.cartItems;
});
exports.selectCartItems = selectCartItems;
var selectCartItemsCount = (0, _reselect.createSelector)([selectCartItems], function (cartItems) {
  return cartItems.reduce(function (quantity, cartItem) {
    return quantity + cartItem.quantity;
  }, 0);
});
exports.selectCartItemsCount = selectCartItemsCount;
var selectCartTotal = (0, _reselect.createSelector)([selectCartItems], function (cartItems) {
  return cartItems.reduce(function (quantity, cartItem) {
    return quantity + cartItem.quantity * cartItem.productPrice;
  }, 0);
});
exports.selectCartTotal = selectCartTotal;