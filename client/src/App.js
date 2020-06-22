import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import './App.css';

const styles = {
  text: {
    color: "#880e4f",
    fontWeight: "bold"
  }
}

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <div className="row center-align">
          <h3 style={styles.text}>Google Books Search</h3>
          <h5 style={styles.text}>Search for and Save Books of Your Interest</h5>
        </div>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
