const express = require('express');
const router = express.Router();
const attemptGroupController = require('../ui/controllers/attemptGroup.controller');

// Retrieve attempts of attempt group
router.get('/:id/attempts', attemptGroupController.getAttempts);

module.exports = router;