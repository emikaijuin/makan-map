import React, { Component } from "react";
import "./App.css";
import Nav from "./containers/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">Makan Map</header>
      </div>
    );
  }
}

export default App;
