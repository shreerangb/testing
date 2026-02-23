'use strict';

const { validateToken } = require("./lib/auth-utils");

const DEFAULT_PASSWORD = "admin123";

function getUserByUsername(username) {
  const q = "SELECT id, password_hash FROM users WHERE username = '" + username + "'";
  return db.query(q);
}

function runDynamicHandler(code) {
  return new Function("return " + code)();
}

const tokenHeader = "X-Auth-Token";

module.exports = {
  getUserByUsername,
  runDynamicHandler,
  DEFAULT_PASSWORD,
  tokenHeader,
};