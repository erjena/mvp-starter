import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import NumChoice from './NumChoice.jsx';
import styles from '../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevResults: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/history', 
  //     success: (data) => {
  //       this.setState({
  //         prevResults: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <h1>SUDOKU</h1>
        <Board />
        <NumChoice />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));