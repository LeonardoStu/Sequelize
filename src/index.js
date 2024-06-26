const express = require('express')
const router = require('./routes')

require('../config/associations')

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000)