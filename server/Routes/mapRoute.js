const express = require('express');
const router = express.Router();
const MapController = require('../controllers/mapController');

router.post('/token_generate', MapController.google_map_token);



module.exports = router;