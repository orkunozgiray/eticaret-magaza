"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProduct = addProduct;
exports.onAddProductStart = onAddProductStart;
exports.fetchProducts = fetchProducts;
exports.onFetchProductsStart = onFetchProductsStart;
exports.deleteProduct = deleteProduct;
exports.onDeleteProductStart = onDeleteProductStart;
exports.fetchProduct = fetchProduct;
exports.onFetchProductStart = onFetchProductStart;
exports["default"] = productsSagas;

var _utils = require("./../../firebase/utils");

var _effects = require("redux-saga/effects");

var _products = require("./products.actions");

var _products2 = require("./products.helpers");

var _products3 = _interopRequireDefault(require("./products.types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(addProduct),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(onAddProductStart),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchProducts),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchProductsStart),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(deleteProduct),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(onDeleteProductStart),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchProduct),
    _marked8 =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchProductStart),
    _marked9 =
/*#__PURE__*/
regeneratorRuntime.mark(productsSagas);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function addProduct(_ref) {
  var payload, timestamp;
  return regeneratorRuntime.wrap(function addProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = _ref.payload;
          _context.prev = 1;
          timestamp = new Date();
          _context.next = 5;
          return (0, _products2.handleAddProduct)(_objectSpread({}, payload, {
            productAdminUserUID: _utils.auth.currentUser.uid,
            createdDate: timestamp
          }));

        case 5:
          _context.next = 7;
          return (0, _effects.put)((0, _products.fetchProductsStart)());

        case 7:
          _context.next = 11;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}

function onAddProductStart() {
  return regeneratorRuntime.wrap(function onAddProductStart$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(_products3["default"].ADD_NEW_PRODUCT_START, addProduct);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function fetchProducts(_ref2) {
  var payload, products;
  return regeneratorRuntime.wrap(function fetchProducts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = _ref2.payload;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _products2.handleFetchProducts)(payload);

        case 4:
          products = _context3.sent;
          _context3.next = 7;
          return (0, _effects.put)((0, _products.setProducts)(products));

        case 7:
          _context3.next = 11;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 9]]);
}

function onFetchProductsStart() {
  return regeneratorRuntime.wrap(function onFetchProductsStart$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)(_products3["default"].FETCH_PRODUCTS_START, fetchProducts);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function deleteProduct(_ref3) {
  var payload;
  return regeneratorRuntime.wrap(function deleteProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          payload = _ref3.payload;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _products2.handleDeleteProduct)(payload);

        case 4:
          _context5.next = 6;
          return (0, _effects.put)((0, _products.fetchProductsStart)());

        case 6:
          _context5.next = 10;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[1, 8]]);
}

function onDeleteProductStart() {
  return regeneratorRuntime.wrap(function onDeleteProductStart$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeLatest)(_products3["default"].DELETE_PRODUCT_START, deleteProduct);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function fetchProduct(_ref4) {
  var payload, product;
  return regeneratorRuntime.wrap(function fetchProduct$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          payload = _ref4.payload;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _products2.handleFetchProduct)(payload);

        case 4:
          product = _context7.sent;
          _context7.next = 7;
          return (0, _effects.put)((0, _products.setProduct)(product));

        case 7:
          _context7.next = 11;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](1);

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[1, 9]]);
}

function onFetchProductStart() {
  return regeneratorRuntime.wrap(function onFetchProductStart$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.takeLatest)(_products3["default"].FETCH_PRODUCT_START, fetchProduct);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function productsSagas() {
  return regeneratorRuntime.wrap(function productsSagas$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.all)([(0, _effects.call)(onAddProductStart), (0, _effects.call)(onFetchProductsStart), (0, _effects.call)(onDeleteProductStart), (0, _effects.call)(onFetchProductStart)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}