const express = require('express')
const router = express.Router()

const PlanetController = require('../controller/PlanetController')

router.post('/planets', PlanetController.store)
router.get('/planets', PlanetController.index)
router.put('/planets/:id', PlanetController.put)
router.delete('/planets/:id', PlanetController.delete)

module.exports = router