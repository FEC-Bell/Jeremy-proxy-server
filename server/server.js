const express = require('express');
const path = require('path');
const { default: Axios } = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

const reviewURL = 'http://ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3001/api/gamereviews/';
const graphURL = 'http://44.233.13.178:3002/api/reviews/';
const dlcURL = 'http://ec2-13-56-224-137.us-west-1.compute.amazonaws.com:3003/api/dlc/';
// const dlcURL = 'http://localhost:8080/api/dlc/';
const nameUrl = 'http://ec2-13-56-224-137.us-west-1.compute.amazonaws.com:3003/api/name/';
const tagURL = 'http://44.233.13.178:3006/api/tags/';
const carouselURL = 'http://ec2-18-188-192-44.us-east-2.compute.amazonaws.com:3004/api/media/';
const gameDescURL = '`http://ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3005/api/description/';

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

//descriptions
app.get('/api/description/:gameId', (req, res) => {
  let param = req.params.gameId;
  console.log('Description Requested! id: ', param);
  Axios.get(gameDescURL + param)
    .then(({ data }) => {
      // console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

//graph
app.get('/api/reviews/:gameId', (req, res) => {
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
  Axios.get(nameUrl + param)
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    })
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


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});