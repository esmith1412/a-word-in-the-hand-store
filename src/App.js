import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// My CSS
import './App.css'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// My Components
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import About from './components/About'


export default function App() {
  return (
    <Router>
      <NavigationBar />
      {/*
          A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL.
      */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  )
}
