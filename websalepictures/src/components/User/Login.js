import React from "react";
import "./styleUser.css";
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUserName: null,
      txtPassword: null,
      loginOn: false
    };
    this.InputChange = this.InputChange.bind(this);
  }

  InputChange = event => {
    const {
      target: { name, value }
    } = event;
    // const name = target.name;
    // const value = target.value;
    // const { name, value } = target;
    var partialState = {};
    partialState[name] = value;
    this.setState(partialState);
  };
  checkLogin = event => {
    if (this.state.txtUserName === null || this.state.txtUserName === "") {
      alert("You must Enter your User Name");
    }
    if (this.state.txtPassword === null || this.state.txtPassword === "") {
      alert("You must Enter your Password");
    } else {
      if (
        this.state.txtUserName == "Vinh" &&
        this.state.txtPassword == "12345678"
      ) {
        alert("Login Successs");
        return this.setState({
          loginOn: true
        });
      } else {
        alert("your user or password is incorect");
      }
    }
  };

  // changeToRegister = () => {
  //   return(
  //     <Redirect to='/register'/>
  //   )
  // }
  render() {
    if (this.state.loginOn) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div class="box-Login">
          <form name="LoginForm" method="">
            <h3>Login</h3>
            <div className="input-box">
              <label for="name">User Name:</label>
              <input
                className="input-box-input"
                type="text"
                id="name"
                value={this.state.txtUserName}
                name="txtUserName"
                placeholder="Please input your name"
                onChange={this.InputChange}
              />
              <label for="mail">Password:</label>
              <input
                className="input-box-input"
                type="password"
                id="password"
                name="txtPassword"
                value={this.state.txtPassword}
                placeholder="input your password"
                onChange={this.InputChange}
              />
            </div>
          </form>
          <button type="submit" onClick={e => this.checkLogin(e)}>
            Login
          </button>
          <p>
            If your not have any user, you must <a href="/register">Register</a>{" "}
            a user
          </p>
          {/* <Redirect to='/forgot_pass' >Forgot password</Redirect> */}
        </div>
      );
    }
  }
}
