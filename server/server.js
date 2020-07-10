const express = require('express');
const path = require('path');
// const pug = require('pug');
const { default: Axios } = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

const reviewURL = 'http://localhost:3001/api/gamereviews/';
const graphURL = 'http://localhost:3002/api/reviewcount/';
const dlcURL = 'http://localhost:3003/api/dlc/';
const tagURL = 'http://localhost:3006/api/tags/';
const carouselURL = 'http://localhost:3004/api/media/';

// app.set('view engine', 'pug');
app.get('/app/:id', (req, res) => {
  console.log('id request!');
  res.status(200).sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

//game reviews
app.get('/api/gamereviews/:gameId', (req, res) => {
  let param = req.params.gameId;
  console.log('Review Requested! id: ', param);
  Axios.get(reviewURL + param)
    .then(({ data }) => {
      // console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});


//graph
app.get('/api/reviewcount/:gameId', (req, res) => {
  let param = req.params.gameId;
  console.log('Graph Request received! id: ', param);
  Axios.get(graphURL + param).then(({ data }) => {
    res.status(200).send(data);
  })
    .catch((err) => {
      console.error(err);
    });
});

//tag
app.get('/api/tags/:gameId', (req, res) => {
  let param = req.params.gameId;
  console.log('Tag Request received! id: ', param);
  Axios.get(tagURL + param)
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});


//dlc
app.get('/api/dlc/:gameId', (req, res) => {
  let param = req.params.gameId;
  console.log('DLC Request received! id: ', param);
  Axios.get(dlcURL + param)
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});


//game name
app.get('/api/name/:gameId', (req, res) => {
  let param = req.params.gameId;

});


//carousel
app.get('/api/media/:gameId', (req, res) => {
  let param = req.params.gameId;

  console.log('Carousel Request Received!id: ', param);
  Axios.get(carouselURL + param)
    .then(({ data }) => {
      // console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});