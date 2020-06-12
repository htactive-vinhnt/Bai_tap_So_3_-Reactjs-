import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu/boxMenu";
import Login from "./components/User/Login";
import Logout from './components/User/Logout';
import Register from "./components/User/Register";
import About from "./components/about";
import Contact from "./components/contact";
import Profile from "./components/profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          linkLogo="https://brasol.vn/public/ckeditor/uploads/tin-tuc/brasol.vn-logo-instargram-logo-instagram-vector.png"
          nameWeb="K4-CN offical"
        />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
            <Route path="/home">
            <Logout/>
              <Menu/>
              <Home />
            </Route>
            <Route path="/about">
            <Logout/>
              <Menu/>
              <About/>
            </Route>
            <Route path="/service">
            <Logout/>
              <Menu/>
            </Route>
            <Route path="/profile">
            <Logout/>
              <Menu/>
              <Profile />
            </Route>
            <Route path="/contact">
            <Logout/>
              <Menu/>
              <Contact/>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
