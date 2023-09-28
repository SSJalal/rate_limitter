const express = require('express')
const services = require('./service/request')

const app = express()
const PORT = 8080

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
    app.use(express.json())
    app.use(services)
})