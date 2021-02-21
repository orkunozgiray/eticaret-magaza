"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.rootReducer = void 0;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _user = _interopRequireDefault(require("./User/user.reducer"));

var _products = _interopRequireDefault(require("./Products/products.reducer"));

var _cart = _interopRequireDefault(require("./Cart/cart.reducer"));

var _orders = _interopRequireDefault(require("./Orders/orders.reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  user: _user["default"],
  productsData: _products["default"],
  cartData: _cart["default"] //   ordersData: ordersReducer,

});
exports.rootReducer = rootReducer;
var configStorage = {
  key: 'root',
  storage: _storage["default"],
  whitelist: ['cartData']
};

var _default = (0, _reduxPersist.persistReducer)(configStorage, rootReducer);

exports["default"] = _default;