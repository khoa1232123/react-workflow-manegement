import React, { Component } from 'react'
import { WorkConsumer } from '../../context';

export default class SKSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(value);
    
    this.setState({
      [name]: value
    });

  }
  
  render() {
    return (
      <WorkConsumer>
        {value => {
          let {onFilterSearch } = value;
          return (
            <div className="input-group sk-search col-6">
              <input type="text" name="txtSearch" onChange={onFilterSearch} className="form-control" placeholder="Search..." />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={() => onFilterSearch(this.state.txtSearch)}>Search</button>
              </div>
            </div>
          )
        }}
      </WorkConsumer>
    )
  }
}
