import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import SKForm from './components/SKForm';
import SKToolbar from './components/SKToolbar';
import SKTabledata from './components/SKTabledata';
import { WorkConsumer } from './context';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <WorkConsumer>
            {value => {
              return (
                <>
                <Header>Quản lý công việc</Header>
                {/* Form add and edit */}

          { (value.formShow) ? <SKForm value={value}>Form thêm và sửa</SKForm> : '' }
                <div className="col mt-5">
                  {/* Toolbar */}
                  <SKToolbar />
                  {/* Tabledata */}
                  <SKTabledata />
                </div>
                </>
              )
            }}
          </WorkConsumer>
        </div>
      </div>
    )
  }
}
