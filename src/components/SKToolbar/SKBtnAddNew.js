import React, { Component } from 'react'
import { WorkConsumer } from '../../context'

export default class SKBtnAddNew extends Component {
  render() {
    return (
      <WorkConsumer>
        {value => {
          let {onChangeForm} = value;
          return (
            <div className="sk-addnew col-6  text-right">
              <button className="btn btn-primary" onClick={onChangeForm} ><span className="fa fa-plus"></span>  Thêm công việc</button>
            </div>
          )
        }}
      </WorkConsumer>
    )
  }
}
