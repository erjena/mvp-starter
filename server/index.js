const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// var items = require('../database-mongo');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(cors());

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(8800, function() {
  console.log('listening on port 8800!');
});
