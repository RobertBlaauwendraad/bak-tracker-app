const express = require('express');
const router = express.Router();
const attemptController = require('../ui/controllers/attempt.controller');

// Retrieve attempts of attempt group
router.post('/', attemptController.createAttempt);

module.exports = router;
