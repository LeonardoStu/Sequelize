const express = require('express')
const router = express.Router()

const PlanetController = require('../controller/PlanetController')
const SateliteController = require('../controller/SateliteController')


router.post('/planets', PlanetController.store)
router.get('/planets', PlanetController.index)
router.put('/planets/:id', PlanetController.put)
router.delete('/planets/:id', PlanetController.delete)

router.post('/planets/:planetId/satelites', SateliteController.store)
router.get('/planets/:planetId/satelites', SateliteController.index)

module.exports = router