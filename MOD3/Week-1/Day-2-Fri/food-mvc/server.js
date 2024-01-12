const express = require('express')
const methodOverride = require('method-override')

const app = express()

const fruits = require('./models/fruits')

const PORT = 5000

// load our engine
const jsxEngine = require('jsx-view-engine')

// format our POST request data 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

// setup our engine
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// "root" route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})

