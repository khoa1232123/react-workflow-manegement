import React, { Component } from 'react'
import SKSearch from './SKToolbar/SKSearch'
import SKOrder from './SKToolbar/SKOrder'
import SKBtnAddNew from './SKToolbar/SKBtnAddNew'

export default class SKToolbar extends Component {
  render() {
    return (
      <div className="sk-toolbar">
        <div className="row">
          {/* Search */}
          <SKSearch />
          {/* Add new */}
          <SKBtnAddNew />
        </div>
      </div>
    )
  }
}
