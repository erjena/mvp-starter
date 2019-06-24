const express = require('express');
const bodyParser = require('body-parser');
const initBoard = require('./hardData');
const db = require('../database-mongo/index');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());

app.get('/newGame', (req, res) => {
  res.send({grid: initBoard[0]});
});

app.post('/save', (req, res) => {
  db.savePlayerState(req.body, (err, result) => {
    if (err) {
      console.log(err)
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  })
})

app.get('/loadGame', (req, res) => {
  db.findPlayerState(req.query.userName, (err, result) => {
    if (err) {
      console.log(err)
      res.sendStatus(500);
    } else {
      res.status(200).send(result);
    }
  })
})


app.listen(8800, function() {
  console.log('listening on port 8800!');
});
