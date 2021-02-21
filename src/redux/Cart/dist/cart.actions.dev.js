"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCart = exports.reduceCartItem = exports.removeCartItem = exports.addProduct = void 0;

var _cart = _interopRequireDefault(require("./cart.types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addProduct = function addProduct(nextCartItem) {
  return {
    type: _cart["default"].ADD_TO_CART,
    payload: nextCartItem
  };
};

exports.addProduct = addProduct;

var removeCartItem = function removeCartItem(cartItem) {
  return {
    type: _cart["default"].REMOVE_CART_ITEM,
    payload: cartItem
  };
};

exports.removeCartItem = removeCartItem;

var reduceCartItem = function reduceCartItem(cartItem) {
  return {
    type: _cart["default"].REDUCE_CART_ITEM,
    payload: cartItem
  };
};

exports.reduceCartItem = reduceCartItem;

var clearCart = function clearCart() {
  return {
    type: _cart["default"].CLEAR_CART
  };
};

exports.clearCart = clearCart;