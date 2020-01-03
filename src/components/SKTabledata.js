import React, { Component } from 'react'
import ItemTable from './ItemTable'
import ToolTable from './ToolTable'
import { WorkConsumer } from '../context'

export default class SKTabledata extends Component {
  render() {
    return (
      <div className="sk-tabledata mt-3">
        <div className="col">
          <div className="row">
            <table className="table table-bordered table-hover text-center">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Trạng Thái</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* tooltable */}
                <WorkConsumer>
                  {value => {
                    return <ToolTable value={value} />;
              }}
            </WorkConsumer>
                <WorkConsumer>
                  {value => {
                    if (value.workList.length !== 0) {
                      return value.workList.map((work, index) => {
                        return <ItemTable key={index} work={work} stt={index} />
                      })
                    }
                  }}
                </WorkConsumer>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
