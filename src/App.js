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
import WorkSamples from './components/Samples'
import Quote from './components/Quote'
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
        <Route exact path="/samples" component={WorkSamples} />
        <Route exact path="/quote" component={Quote} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </Router>
  )
}
