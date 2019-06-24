import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      started: false,
      initGrid: [],
      grid: []
    }
    this.handleUserName = this.handleUserName.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleLoadGame = this.handleLoadGame.bind(this);
    this.handleGridChange = this.handleGridChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleUserName(e) {
    e.preventDefault();
    this.setState({
      userName: e.target.value
    })
  }

  handleNewGame(e) {
    e.preventDefault();
    if (this.state.userName === '') {
      alert('Name is required. Please enter your name.');
      return;
    }
    axios.get(`/newGame?userName=${this.state.userName}`)
      .then((response) => {
        this.setState({
          initGrid: response.data.grid,
          grid: JSON.parse(JSON.stringify(response.data.grid)),
          started: true
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
  }

  handleLoadGame(e) {
    axios.get(`/loadGame?userName=${this.state.userName}`)
      .then((response) => {
        this.setState({
          userName: response.data.userName,
          initGrid: response.data.initGrid,
          grid: response.data.grid,
          started: true
        })
      })
      .catch((error) => {
        alert(error);
      })
  }

  handleGridChange(row, col, value) {
    if (this.state.initGrid[row][col] !== 0) {
      alert('Can not change initial values');
      return;
    }

    if (value !== '') {
      value = Number(value);
      for (let j = 0; j < 9; j++) {
        if (j != col && value === this.state.grid[row][j]) {
          alert('Invalid row');
          return;
        }
      }
      for (let i = 0; i < 9; i++) {
        if (i != row && value === this.state.grid[i][col]) {
          alert('Invalid column');
          return;
        }
      }
      const gridX = Math.floor(row / 3);
      const gridY = Math.floor(col / 3);
      for (let i = gridX * 3; i < (gridX + 1) * 3; i++) {
        for (let j = gridY * 3; j < (gridY + 1) * 3; j++ ) {
          if (i !== row && j !== col && value === this.state.grid[i][j]) {
            alert('Invalud grid');
            return;
          }
        }
      }
    } else {
      value = 0;
    }

    this.state.grid[row][col] = value;
    this.setState({
      grid: this.state.grid
    });

    let finish = true;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.state.grid[i][j] === 0) {
          finish = false;
        }
      }
    }

    if (finish === true) {
      alert('You won!!!');
    }
  }

  handleSave(e) {
    e.preventDefault();
    axios.post('/save', {
      userName: this.state.userName,
      initGrid: this.state.initGrid,
      grid: this.state.grid
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
  }

  render() {        
    if (this.state.started === false) {
      return (
        <div className="initPage">
          <input className= "username" type="text" value={this.state.userName} onChange={this.handleUserName}/>
          <div className="startLoadButtons">
            <button className="startButton" onClick={this.handleNewGame}>Start New Game</button>
            <button className="loadButton" onClick={this.handleLoadGame}>Load Game</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Board initGrid={this.state.initGrid} grid={this.state.grid} onValueChange={this.handleGridChange}/>
          <button className="saveButton" onClick={this.handleSave}>Save</button>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));