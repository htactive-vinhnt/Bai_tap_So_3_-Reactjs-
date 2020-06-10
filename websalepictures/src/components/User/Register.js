import React from 'react';
import './styleUser.css';
import {Redirect} from 'react-router-dom';

export default class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      txtname: null,
      txtusername: null,
      txtEmail: null,
      txtPassword: null,
      pass_confirm: null,
      registerOn: false
    };
    this.InputChange = this.InputChange.bind(this);
  }
  InputChange = (event) => {
    const {target: { name, value }} = event;
    var partialState = {};
    partialState[name] = value;
    this.setState(partialState);
  };

  CheckRegister = (event) => {
    if(this.state.txtname === null || this.statr.txtname === ""){
      alert("You must Enter your name")
    }
    if(this.state.txtusername === null || this.statr.txtusername === ""){
      alert("You must Enter your user name")
    }
    if(this.state.txtEmail === null || this.statr.txtEmail === ""){
      alert("You must Enter your email")
    }
    if(this.state.txtPassword === null || this.statr.txtPassword === ""){
      alert("You must Enter your password")
    }
    if(this.state.pass_confirm === null || this.statr.pass_confirm === ""){
      alert("You must Enter your password confirm")
    }
  };

  render() {
    return (
      <div class='box-Login'>
        <form name='RegisterForm' method=''>
          <h3>Register</h3>
          <div className='input-box'>
            <label for='txtname'>Name</label>
            <input
              type='text'
              id='name'
              name='txtname'
              placeholder='Please input your name'
              value={this.state.txtname}
              onChange={this.InputChange}
            />
            <label for='txtusername'>User Name</label>
            <input
              type='text'
              name='txtusername'
              placeholder='input your email address'
              value={this.state.txtusername}
              onChange={this.InputChange}
            />
            <label for='txtEmail'>Email</label>
            <input
              type='email'
              name='txtEmail'
              placeholder='What can we do to assist you ?'
              value={this.state.txtEmail}
              onChange={this.InputChange}
            />
            <label for='txtPassword'>Password</label>
            <input
              type='password'
              name='txtPassword'
              placeholder='What can we do to assist you ?'
              value={this.state.txtPassword}
              onChange={this.InputChange}
            />
            <label for='pass_confirm'>Password Cofirm</label>
            <input
              type='password'
              name='pass-confirm'
              placeholder='What can we do to assist you ?'
              value={this.state.pass_confirm}
              onChange={this.InputChange}
            />
          </div>
        </form>
        <button type='submit' onClick={e => this.CheckRegister(e)}>Register</button>
      </div>
    );
  }
}
