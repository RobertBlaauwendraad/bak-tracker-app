'use strict';

const AttemptModel = function (attempt) {
  this.attempt_taker = attempt.attempt_taker;
  this.attempt_time = attempt.attempt_time;
}

module.exports = AttemptModel;