import React, { Component } from 'react'

export default class ToolTable extends Component {
  onChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.props.value.onSortBy(name, value);
    console.log(value);
  }
  render() {
    return (
      <tr className="sk-tooltable">
        <td></td>
        <td>
          <select className="custom-select" name="name" onChange={this.onChange}>
            <option>Ten</option>
            <option value='asc'>A -> Z</option>
            <option value='desc'>Z -> A</option>
          </select>
        </td>
        <td>
          <select className="custom-select" name="status" onChange={this.onChange}>
            <option>Trang thái</option>
            <option value='desc'>Hien</option>
            <option value='asc'>an</option>
          </select>
        </td>
        <td></td>
      </tr>
    )
  }
}
