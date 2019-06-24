const express = require('express');
const bodyParser = require('body-parser');
const initBoard = require('./hardData');

// var items = require('../database-mongo');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/newGame', (req, res) => {
  console.log(req.query.userName);
  res.send({grid: initBoard[0]});
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.listen(8800, function() {
  console.log('listening on port 8800!');
});
