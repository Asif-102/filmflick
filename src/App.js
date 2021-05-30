import React from "react";
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import NaviGationBar from "./Components/Home/NaviGationBar/NaviGationBar";
import { AuthContextProvider } from "./Components/Login/UseAuth";
import MovieDetail from "./Components/Home/MovieDetails/MovieDetail";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <NaviGationBar></NaviGationBar>
              <Home></Home>
            </Route>
            <Route path="/movie/:id">
              <MovieDetail></MovieDetail>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
