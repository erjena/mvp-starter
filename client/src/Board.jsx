import React from 'react';
import '../dist/styles.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      cellValue: '',
      grid: [
        [0,1,1],
        [0,1,1],
        [0,1,1]
      ]
    });
  }

  render() {
    const rows = this.state.grid.map((r, i) => {
      const cells = r.map((c, j) => {
        return (<td key={i.toString() + j.toString()}><input type="text" maxLength="1" /></td>)
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
