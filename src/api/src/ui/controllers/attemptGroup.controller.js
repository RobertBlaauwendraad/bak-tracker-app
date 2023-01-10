const AttemptGroupEntity = require('../../data/entities/attemptGroup.entity');

exports.getAttempts = function (req, res) {
  AttemptGroupEntity.getAttempts(req.params.id, function (err, attempts) {
    if (err) {
      res.send(err);
    }
    res.send(attempts);
  })
}