const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

const reviewURL = 'http://localhost:3001/api/gamereviews/';
const graphURL = 'http://localhost:3002/api/reviews/';
const dlcURL = 'http://localhost:3003/api/dlc/';
const carouselURL = 'http://localhost:3004/api/media/';

//game reviews
app.get('/api/gamereviews/:gameId', (req, res) => {
  let param = req.params.gameId;

});


//graph
app.get('/api/tags/:gameId', (req, res) => {
  let param = req.params.gameId;

});


//dlc
app.get('/api/dlc/:gameId', (req, res) => {
  let param = req.params.gameId;

});


//game name
app.get('/api/name/:gameId', (req, res) => {
  let param = req.params.gameId;

});


//carousel
app.get('/api/media/:gameId', (req, res) => {
  let param = req.params.gameId;

});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});