const express = require('express')
const router = express.Router()

const PlanetController = require('../controller/PlanetController')

router.post('/planets', PlanetController.store)

module.exports = router