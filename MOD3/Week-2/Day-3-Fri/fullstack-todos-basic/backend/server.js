require('dotenv').config()

const express = require('express')
const cors = require('cors')

const mongoConfig = require('./config')

const app = express()

const PORT = 8080

app.use(cors())

app.get('/api/test', (req, res) => {
    console.log('test')
    res.json('Server says: Hello Client!')
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
    mongoConfig()
})


