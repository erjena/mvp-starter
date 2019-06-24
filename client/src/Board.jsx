import React from 'react';
import '../dist/styles.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target)
  }

  render() {
    const rows = this.props.grid.map((r, i) => {
      const cells = r.map((c, j) => {
        const id = i.toString() + j.toString();
        return (
        <td key={id}>
          <input id={id} type="text" maxLength="1" value={c} onChange={this.handleChange} />
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
