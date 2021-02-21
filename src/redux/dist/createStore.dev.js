"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.persistor = exports.store = exports.middlewares = void 0;

var _redux = require("redux");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _reduxPersist = require("redux-persist");

var _rootReducer = _interopRequireDefault(require("./rootReducer"));

var _rootSaga = _interopRequireDefault(require("./rootSaga"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sagaMiddleware = (0, _reduxSaga["default"])();
var middlewares = [_reduxThunk["default"], sagaMiddleware, _reduxLogger["default"]];
exports.middlewares = middlewares;
var store = (0, _redux.createStore)(_rootReducer["default"], _redux.applyMiddleware.apply(void 0, middlewares));
exports.store = store;
sagaMiddleware.run(_rootSaga["default"]);
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;
var _default = {
  store: store,
  persistor: persistor
};
exports["default"] = _default;