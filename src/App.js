import React from "react";
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import NaviGationBar from "./Components/Home/NaviGationBar/NaviGationBar";

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
            <NaviGationBar></NaviGationBar>
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
