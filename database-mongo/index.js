const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const playerState = mongoose.Schema({
  userName: String,
  initGrid: Array,
  grid: Array
});

const PlayerState = mongoose.model('PlayerState', playerState);

const savePlayerState = (state, callback) => {
  PlayerState.findOneAndUpdate({userName: state.userName}, state, {upsert: true}, (err, result) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

const findPlayerState = (userName, callback) => {
  PlayerState.findOne({userName: userName}, (err, result) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  savePlayerState,
  findPlayerState
}