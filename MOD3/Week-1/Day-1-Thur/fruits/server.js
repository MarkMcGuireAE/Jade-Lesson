const express = require('express')

const app = express()
const PORT = 5000

const fruits = require('./models/fruits.js')

// "index" route
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// "show" route
app.get('/fruits/:indexOfFruit', (req, res) => {
    res.send(fruits[req.params.indexOfFruit])
})

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})