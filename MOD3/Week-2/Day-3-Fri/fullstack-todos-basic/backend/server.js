const express = require('express')

const app = express()

const PORT = 8080

app.get('/test', (req, res) => {
    res.send('Server says: Hello Client!')
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})


