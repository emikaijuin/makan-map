import React, { Component } from 'react';
import './App.css';

// Components
import Navbar from '../components/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <header className="App-header">
          Makan Map
        </header>
      </div>
    );
  }
}

export default App;
