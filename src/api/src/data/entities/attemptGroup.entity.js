const dbConnector = require("../../../config/db.config");

const AttemptGroup = function (attemptGroup) {
  this.groupId = attemptGroup.groupId;
  this.groupName = attemptGroup.groupName;
}

AttemptGroup.getAttempts = function (id, result) {
  dbConnector.query("SELECT A.attempt_id, A.attempt_taker, A.attempt_time FROM attempt A JOIN attempts_in_group AIG ON A.attempt_id = AIG.attempt_id WHERE AIG.attempt_group_id = ? ORDER BY A.attempt_time ASC", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  })
}

AttemptGroup.insertAttempt = function (groupId, attemptId, result) {
  dbConnector.query("INSERT INTO attempts_in_group VALUES (?, ?)", [groupId, attemptId], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  })
}

module.exports = AttemptGroup;