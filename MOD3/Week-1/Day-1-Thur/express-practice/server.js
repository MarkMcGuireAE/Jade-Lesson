let colors = ['red', 'blue', 'green', 'orange']

// Require modules
const express = require('express');

// Create the Express app
const app = express();

const PORT = 3000

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.get('/', function(req, res) {
  	res.send('<h1>Hello Expresss!</h1>');
});

app.get('/home', function(req, res) {
    res.send('<h1>Home Page</h1>')
})

app.get('/:test', function(req, res) {
    res.send('<h1>Test</h1>')
})

app.get('/:test2', function(req, res) {
    res.send('<h1>Test</h1>')
})



app.get('/colors/:indexOfColor', (req, res) => {
    if (colors[req.params.indexOfColor]) {
        res.send(colors[req.params.indexOfColor]);
  } else {
    res.send('cannot find anything at this index: ' + req.params.indexOfColor);
  }
})

// Tell the app to listen on port 3000
app.listen(PORT, function() {
 console.log(`Listening on port ${PORT}`);
});