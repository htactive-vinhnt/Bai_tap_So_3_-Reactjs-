import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu/boxMenu";
import Login from "./components/User/Login";
import Logout from './components/User/Logout';
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
            <Route path="/home">
            <Logout/>
              <Menu/>
              <Home />
            </Route>
            <Route path="/about"></Route>
            <Route path="/service"></Route>
            <Route path="/new"></Route>
            <Route path="/serPage"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
