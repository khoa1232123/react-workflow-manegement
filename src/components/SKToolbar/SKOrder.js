import React, { Component } from 'react'
import { WorkConsumer } from '../../context'

export default class SKOrder extends Component {
  render() {
    return (
      <WorkConsumer>
        {value => {
          return (
            <div className="sk-order col-3">
              <select className="custom-select">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          )
        }}
      </WorkConsumer>
    )
  }
}
