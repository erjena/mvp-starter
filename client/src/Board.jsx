import React from 'react';
import '../dist/styles.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const row = Number(e.target.id[0]);
    const col = Number(e.target.id[1]);
    const value = Number(e.target.value);
    for (let j = 0; j < 9; j++) {
      if (j != col && value === this.props.grid[row][j]) {
        alert('Invalid row');
        return;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (i != row && value === this.props.grid[i][col]) {
        alert('Invalid column');
        return;
      }
    }
    this.props.grid[row][col] = value;
  }

  render() {
    const rows = this.props.grid.map((r, i) => {
      const cells = r.map((c, j) => {
        const id = i.toString() + j.toString();
        const value = c === 0 ? '' : c;
        return (
        <td key={id}>
          <input id={id} type="text" maxLength="1" value={value} onChange={this.handleChange} className="cell"/>
        </td>)
      });
      return (
        <tr key={i.toString()}>
          {cells}
        </tr>
      )
    });
    return(
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
