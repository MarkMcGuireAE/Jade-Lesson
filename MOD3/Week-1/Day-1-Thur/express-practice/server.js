const express = require('express');
const app = express();
const PORT = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];

app.get('/awesome', (req, res) => { //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });

app.get('/:indexOfPlantsArray', (req, res) => { //:indexOfPlantsArray can be anything, even awesome
    res.send(plants[req.params.indexOfPlantsArray]);
});

app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

app.get('/howdy/:firstName', function(req, res) {
    console.log('req.params: ', req.params);
    console.log('req.query: ', req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
});

app.listen(PORT,() => {
    console.log('listening on PORT' , PORT);
});