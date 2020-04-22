const cors = require('cors')
const express = require('express')
const app = express()
const index = require('./routes/index')
const errorHandle = require('./middlewares/errorHandle')

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())
app.use(index)
app.use(errorHandle)

module.exports = app
