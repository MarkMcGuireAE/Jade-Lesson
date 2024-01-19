const express = require('express')
const cors = require('cors')

const app = express()

const PORT = 8080

app.use(cors())

app.get('/api/test', (req, res) => {
    console.log('test')
    res.send('Server says: Hello Client!')
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})


