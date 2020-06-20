import React from 'react';
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
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
          <h3 style={styles.text}>Books Google Search</h3>
          <h5 style={styles.text}>Search for and Save Books of Your Interest</h5>
        </div>
      </header>
      <Search />
    </div>
  );
}

export default App;
