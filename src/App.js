import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
