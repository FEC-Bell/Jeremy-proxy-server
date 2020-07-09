const express = require('express');
const path = require('path');
const pug = require('pug');
const { default: Axios } = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

const reviewURL = 'http://localhost:3001/api/gamereviews/';
const graphURL = 'http://localhost:3002/api/reviews/';
const dlcURL = 'http://localhost:3003/api/dlc/';
const carouselURL = 'http://localhost:3004/api/media/';

// app.set('view engine', 'pug');
// app.get('/game/:id', (req, res) => {

//   res.status(200).render('../client/dist/index');
// });

//game reviews
app.get('/api/gamereviews/:gameId', (req, res) => {
  let param = req.params.gameId;
  Axios.get(dlcURL + param)
    .then(({ data }) => {
      console.log(data);
      res.status(200).send(data);
    });
});


//graph
app.get('/api/reviews/:gameId', (req, res) => {
  let param = req.params.gameId;
  console.log('Graph Request received!');
  Axios.get(graphURL + param).then((data) => {

  });
});


//dlc
app.get('/api/dlc/:gameId', (req, res) => {
  let param = req.params.gameId;
  console.log('DLC Request received!');
  Axios.get(dlcURL + param)
    .then(({ data }) => {
      res.status(200).send(data);
    });
});


//game name
app.get('/api/name/:gameId', (req, res) => {
  let param = req.params.gameId;

});


//carousel
app.get('/api/media/:gameId', (req, res) => {
  let param = req.params.gameId;

  console.log('Carousel Request Received!');
  Axios.get(carouselURL + param)
    .then(({ data }) => {
      console.log(data);
      res.status(200).send(data);
    });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});