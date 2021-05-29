import React from "react";
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
