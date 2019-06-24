import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Board from './Board.jsx';
import NumChoice from './NumChoice.jsx';
import styles from '../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      grid: []
    }
    this.handleUserName = this.handleUserName.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleLoadGame = this.handleLoadGame.bind(this);
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
        console.log('in axios')
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleLoadGame(e) {
    console.log('load')
  }

  render() {        
    if (this.state.userName === '') {
      return (
        <div>
          <input type="text" value={this.state.userName} onChange={this.handleUserName}/>
          <button onClick={this.handleNewGame}>Start New Game</button>
          <button onClick={this.handleLoadGame}>Load Game</button>
        </div>
      )
    } else {
      return (
        <div>
          <Board grid={this.state.grid}/>
          <NumChoice />
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));