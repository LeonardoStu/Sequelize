const Planet = require('../models/planet')
const Satelite = require('../models/satelite')

Planet.hasOne(Satelite, {onDelete: "CASCATE", onUpdate: "CASCATE"})
Satelite.belongsTo(Planet, {foreingKey: "planetId", as: "planet"})

module.exports = {Planet, Satelite}