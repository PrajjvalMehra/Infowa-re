import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./Components/Admin";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Admin" component={Admin}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;