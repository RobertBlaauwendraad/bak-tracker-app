'use strict';

const AttemptEntity = require("../../data/entities/attempt.entity");
const AttemptModel = require("../models/attempt.model");
const AttemptGroupEntity = require("../../data/entities/attemptGroup.entity");

exports.createAttempt = function (req, res) {
  const attempt = new AttemptModel(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide required fields'});
  } else {
    AttemptEntity.create(attempt, function (err, created_attempt) {
      if (err) {
        res.send(err);
      } else {
        AttemptGroupEntity.insertAttempt(1, created_attempt.insertId, function (err) {
          if (err) {
            res.send(err);
          } else {
            res.json({error: false, message: "Attempt added successfully!", data: created_attempt});
          }
        })
      }
    });
  }
}