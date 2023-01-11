'use strict';

const dbConnector = require("../../../config/db.config");

const Attempt = function (attempt) {
  this.attempt_taker = attempt.attempt_taker;
  this.attempt_time = attempt.attempt_time;
}

Attempt.create = function (attempt, result) {
  dbConnector.query("INSERT INTO attempt set ?", attempt, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Attempt;