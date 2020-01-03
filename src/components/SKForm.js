import React, { Component } from 'react'
import { WorkConsumer } from '../context'

export default class SKForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      stStatus: true
    }
  }

  componentDidMount () {
    this.setState({
      id: this.props.value.id,
      txtName: this.props.value.txtName,
      stStatus: this.props.value.stStatus
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
    
    if (nextProps) {
      this.setState({
        id: nextProps.value.id,
        txtName: nextProps.value.txtName,
        stStatus: nextProps.value.stStatus
      })
    }
  }

  onGetValue = (event) => {

  }

  onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    
    this.setState({
      [name]: value
    })
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      txtName: '',
      stStatus: true
    })
  }

  render() {
    return (
      <WorkConsumer>
        {value => {
          let { onHandleSubmit } = value;
          return (
            <div className="col-3 mt-5">
              <div className="card card-primary">
                <div className="card-header bg-primary text-white">Form thêm</div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                      type="text" 
                      name="txtName" 
                      className="form-control" 
                      value={this.state.txtName} 
                      onChange={this.onHandleChange} 
                      placeholder="Tên" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <select 
                      className="form-control" 
                      name="stStatus" 
                      onChange={this.onHandleChange} 
                      value={this.state.stStatus}
                    >
                      <option value={true}>Hiển thị</option>
                      <option value={false}>Ẩn</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={() => onHandleSubmit(this.state)}>Submit</button>
                </div>
              </div>
            </div>
          )
        }}
      </WorkConsumer>
    )
  }
}
