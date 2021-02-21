"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleReduceCartItem = exports.handleRemoveCartItem = exports.handleAddToCart = exports.existingCartItem = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var existingCartItem = function existingCartItem(_ref) {
  var prevCartItems = _ref.prevCartItems,
      nextCartItem = _ref.nextCartItem;
  return prevCartItems.find(function (cartItem) {
    return cartItem.documentID === nextCartItem.documentID;
  });
};

exports.existingCartItem = existingCartItem;

var handleAddToCart = function handleAddToCart(_ref2) {
  var prevCartItems = _ref2.prevCartItems,
      nextCartItem = _ref2.nextCartItem;
  var quantityIncrement = 1;
  var cartItemExists = existingCartItem({
    prevCartItems: prevCartItems,
    nextCartItem: nextCartItem
  });

  if (cartItemExists) {
    return prevCartItems.map(function (cartItem) {
      return cartItem.documentID == nextCartItem.documentID ? _objectSpread({}, cartItem, {
        quantity: cartItem.quantity + quantityIncrement
      }) : cartItem;
    });
  }

  return [].concat(_toConsumableArray(prevCartItems), [_objectSpread({}, nextCartItem, {
    quantity: quantityIncrement
  })]);
};

exports.handleAddToCart = handleAddToCart;

var handleRemoveCartItem = function handleRemoveCartItem(_ref3) {
  var prevCartItems = _ref3.prevCartItems,
      cartItemToRemove = _ref3.cartItemToRemove;
  return prevCartItems.filter(function (item) {
    return item.documentID !== cartItemToRemove.documentID;
  });
};

exports.handleRemoveCartItem = handleRemoveCartItem;

var handleReduceCartItem = function handleReduceCartItem(_ref4) {
  var prevCartItems = _ref4.prevCartItems,
      cartItemToReduce = _ref4.cartItemToReduce;
  var existingCartItem = prevCartItems.find(function (cartItem) {
    return cartItem.documentID === cartItemToReduce.documentID;
  });

  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(function (cartItem) {
      return cartItem.documentID !== existingCartItem.documentID;
    });
  }

  return prevCartItems.map(function (cartItem) {
    return cartItem.documentID === existingCartItem.documentID ? _objectSpread({}, cartItem, {
      quantity: cartItem.quantity - 1
    }) : cartItem;
  });
};

exports.handleReduceCartItem = handleReduceCartItem;