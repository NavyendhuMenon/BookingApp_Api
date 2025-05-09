const express = require('express');
const { listActivities, seedActivities } = require('../controllers/activityController');
const router = express.Router();

router.get('/', listActivities);
router.get('/seed', seedActivities);

module.exports = router;
