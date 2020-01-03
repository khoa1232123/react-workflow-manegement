import React, { Component } from 'react'
import { WorkConsumer } from '../context';

export default class ItemTable extends Component {
  render() {
    let {id, name, status} = this.props.work;
    return (
      <WorkConsumer>
        {value => {
          let {removeItem, updateItem, onUpdateStatus} = value;
          return (
            <tr>
              <td>{this.props.stt + 1}</td>
              <td>{name}</td>
              <td>
                <button className={ (status) ? 'btn btn-sm btn-success' : 'btn btn-sm btn-danger' } onClick={() => onUpdateStatus(id)}>
                  {(status) ? 'Hiển thị' : 'Ẩn'}
                </button>
              </td>
              <td>
                <button 
                  className="btn btn-warning btn-sm mr-2"
                  onClick={() => updateItem(id)}
                >
                  <span className="fa fa-edit mr-1"></span>
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(id)}
                >
                  <span className="fa fa-trash-alt mr-1"></span>
                  Delete
                </button>
              </td>
            </tr>
          )
        }}
      </WorkConsumer>
    )
  }
}
