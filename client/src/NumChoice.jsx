import React from 'react';
import '../dist/styles.css';

export default class NumChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currNum: null,
      value: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ currNum: e.target.value });
  }

  render() {
    return (
      <div>
        <button className="currNum" onClick={this.handleClick} value="1">1</button>
        <button className="currNum" onClick={this.handleClick} value="2">2</button>
        <button className="currNum" onClick={this.handleClick} value="3">3</button>
        <button className="currNum" onClick={this.handleClick} value="4">4</button>
        <button className="currNum" onClick={this.handleClick} value="4">5</button>
        <button className="currNum" onClick={this.handleClick} value="6">6</button>
        <button className="currNum" onClick={this.handleClick} value="7">7</button>
        <button className="currNum" onClick={this.handleClick} value="8">8</button>
        <button className="currNum" onClick={this.handleClick} value="9">9</button>
      </div>
    )
  }
}