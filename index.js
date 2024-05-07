(async () => {
    const Planet = require('./models/planet')

    const newPlanet = await Planet.create({
        name: 'Marte',
        position: 4
    })

    console.log(newPlanet)
})();