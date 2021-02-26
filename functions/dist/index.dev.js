"use strict";

var functions = require("firebase-functions");

var express = require("express");

var cors = require("cors");

var stripe = require('stripe')('sk_test_51FxNB4EVqFiUSN9e7ofxFgpHQrVpFMz1nbwb9lcFSosGgrtSKgrb4YV3npeLP2DM3I9gg4UsRT9cYxt6JBJmgx5y00ZULKqAOE');

var app = express();
app.use(cors({
  origin: true
}));
app.use(express.json());
app.post('/payments/create', function _callee(req, res) {
  var _req$body, amount, shipping, paymentIntent;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, amount = _req$body.amount, shipping = _req$body.shipping;
          _context.next = 4;
          return regeneratorRuntime.awrap(stripe.paymentIntents.create({
            shipping: shipping,
            amount: amount,
            currency: 'usd'
          }));

        case 4:
          paymentIntent = _context.sent;
          res.status(200).send(paymentIntent.client_secret);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            statusCode: 500,
            message: _context.t0.message
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
app.get("*", function (req, res) {
  res.status(404).send("404, Not Found.");
});
exports.api = functions.https.onRequest(app);