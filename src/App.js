import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// My CSS
import './App.css'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// My Components
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import AboutUs from './components/About'
import PrivacyPolicy from './components/Policy'
import TermsAndConditions from './components/Terms'
import Default from './components/Default'
import Footer from './components/Footer'


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
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/policy" component={PrivacyPolicy} />
        <Route exact path="/terms" component={TermsAndConditions} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </Router>
  )
}
