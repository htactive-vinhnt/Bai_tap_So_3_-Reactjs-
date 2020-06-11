import React from "react";
import "./styleUser.css";
import { Redirect } from "react-router-dom";
// import {UsersArr, saveLocal} from '../localStorage';
let user = {};
let checkuser;





export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = [{
      txtname: null,
      txtusername: null,
      txtEmail: null,
      txtPassword: null,
      pass_confirm: null,
      registerOn: false
    }];
    this.InputChangeR = this.InputChangeR.bind(this);
    
  }

  InputChangeR = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    var partialState = {};
    partialState[name] = value;
    this.setState(partialState);
  };
  
  setData = () =>{
    
    localStorage.setItem("UsersArr",JSON.stringify(this.state));
    
    let UsersArr = localStorage.getItem("UsersArr");
    
  }

  CheckRegister = event => {
    // if (this.state.txtname === null || this.state.txtname === "") {
    //   alert("You must Enter your name");
    // }
    // if (this.state.txtusername === null || this.state.txtusername === "") {
    //   alert("You must Enter your user name");
    // }
    // if (this.state.txtEmail === null || this.state.txtEmail === "") {
    //   alert("You must Enter your email");
    // }
    // if (this.state.txtPassword === null || this.state.txtPassword === "") {
    //   alert("You must Enter your password");
    // }
    // if (this.state.pass_confirm === null || this.state.pass_confirm === "") {
    //   alert("You must Enter your password confirm");
    // } else {
    //   if (this.state.txtPassword.length < 8) {
    //     alert("password must then 8 word");
    //   }
    //   if (this.state.txtPassword != this.state.pass_confirm) {
    //     alert("password confirm increct");
    //   } else {
        // user = {
        //   name: this.state.txtname,
        //   user: this.state.txtusername,
        //   email: this.state.txtEmail,
        //   password: this.state.txtPassword
        // };
        this.setData();
        
        
    //   }
    // }
   
  };
  
  render() {
    return (
      <div class="box-Login">
        <form name="RegisterForm" method="">
          <h3>Register</h3>
          <div className="input-box">
            <label for="txtname">Name</label>
            <input
              type="text"
              id="name"
              name="txtname"
              placeholder="Please input your name"
              value={this.state.txtname}
              onChange={this.InputChangeR}
            />
            <label for="txtusername">User Name</label>
            <input
              type="text"
              name="txtusername"
              placeholder="input your user name"
              value={this.state.txtusername}
              onChange={this.InputChangeR}
            />
            <label for="txtEmail">Email</label>
            <input
              type="email"
              name="txtEmail"
              placeholder="Input your email"
              value={this.state.txtEmail}
              onChange={this.InputChangeR}
            />
            <label for="txtPassword">Password</label>
            <input
              type="password"
              name="txtPassword"
              placeholder="Input your password"
              value={this.state.txtPassword}
              onChange={this.InputChangeR}
            />
            <label for="pass_confirm">Password Cofirm</label>
            <input
              type="password"
              name="pass_confirm"
              placeholder="Input password confirm"
              value={this.state.pass_confirm}
              onChange={this.InputChangeR}
            />
          </div>
        </form>
        <button type="submit" onClick={e => this.CheckRegister(e)}>
          Register
        </button>
      </div>
    );
  }
}
