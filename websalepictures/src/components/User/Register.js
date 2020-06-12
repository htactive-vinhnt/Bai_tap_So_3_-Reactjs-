import React from "react";
import "./styleUser.css";
import { Redirect, withRouter } from "react-router-dom";
// import {UsersArr, saveLocal} from '../localStorage';
let user = {};
let checkuser;

export default withRouter(
  class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        txtname: null,
        txtusername: null,
        txtEmail: null,
        txtPassword: null,
        pass_confirm: null,
        registerOn: false,
        userExit: false,
        user: props.user
      };
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

    setData = () => {
      let Users = localStorage.getItem("UsersArr");
      let UsersArr = [];

      if (Users) {
        UsersArr = JSON.parse(Users);
        UsersArr.push(this.state.user);
        UsersArr = Array.from(new Set(UsersArr));
        localStorage.setItem("UsersArr", JSON.stringify(UsersArr));
      } else {
        UsersArr = [];
        UsersArr.push(this.state.user);
        localStorage.setItem("UsersArr", JSON.stringify(UsersArr));
      }
      this.setState({ userExit: true });
    };
    checkuserExit() {
      // const Users = JSON.parse(localStorage.getItem("UsersArr"));
      // const user = Users.find(user => {
      //     return user.name === 'Vinh' && user.password === '12345678'
      // });
      // return user ? true : false;
      return localStorage.hasOwnProperty("vinh")
        ? alert("true")
        : alert("false");
    }

    componentDidMount() {
      // lay data tu localstorage
      // setState
      let Users = localStorage.getItem("UsersArr");
      let UsersArr = [];
      if (Users) {
        UsersArr = JSON.parse(Users);
        if (UsersArr.includes(this.state.user)) {
          this.setState({ userExit: true });
        }
      }
      console.log(this.state.userExit);
    }

    CheckRegister = event => {
      if (this.state.txtname === null || this.state.txtname === "") {
        alert("You must Enter your name");
      }
      if (this.state.txtusername === null || this.state.txtusername === "") {
        alert("You must Enter your user name");
      }
      if (this.state.txtEmail === null || this.state.txtEmail === "") {
        alert("You must Enter your email");
      }
      if (this.state.txtPassword === null || this.state.txtPassword === "") {
        alert("You must Enter your password");
      }
      if (this.state.pass_confirm === null || this.state.pass_confirm === "") {
        alert("You must Enter your password confirm");
      } else {
        if (this.state.txtPassword.length < 8) {
          alert("password must then 8 word");
        }
        if (this.state.txtPassword != this.state.pass_confirm) {
          alert("password confirm increct");
        } else {
          const userObj = {
            name: this.state.txtname,
            user: this.state.txtusername,
            email: this.state.txtEmail,
            password: this.state.txtPassword
          };
          this.checkuserExit();

          this.setState({
            user: userObj
          });
          this.setData();
          alert("Register Successfull");
          return this.props.history.push("/home");
        }
      }
    };

    render() {
      return (
        <div className="box-Registe">
          <form name="RegisterForm" method="">
            <h3>Register</h3>
            <div className="input-box">
              <label for="txtname">Name</label>
              <input
                className="input-box-input"
                type="text"
                id="name"
                name="txtname"
                placeholder="Please input your name"
                value={this.state.txtname}
                onChange={this.InputChangeR}
              />
              <label for="txtusername">User Name</label>
              <input
                className="input-box-input"
                type="text"
                name="txtusername"
                placeholder="input your user name"
                value={this.state.txtusername}
                onChange={this.InputChangeR}
              />
              <label for="txtEmail">Email</label>
              <input
                className="input-box-input"
                type="email"
                name="txtEmail"
                placeholder="Input your email"
                value={this.state.txtEmail}
                onChange={this.InputChangeR}
              />
              <label for="txtPassword">Password</label>
              <input
                className="input-box-input"
                type="password"
                name="txtPassword"
                placeholder="Input your password"
                value={this.state.txtPassword}
                onChange={this.InputChangeR}
              />
              <label for="pass_confirm">Password Cofirm</label>
              <input
                className="input-box-input"
                type="password"
                name="pass_confirm"
                placeholder="Input password confirm"
                value={this.state.pass_confirm}
                onChange={this.InputChangeR}
              />
            </div>
          </form>
          <div className="btn-box">
            <button type="submit" onClick={e => this.CheckRegister(e)}>
              Register
            </button>
            <button
              type="button"
              onClick={() => this.props.history.push("/login")}
            >
              Login
            </button>
          </div>
        </div>
      );
    }
  }
);
