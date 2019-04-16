import React, { Component } from "react";
import "./App.css";
import Nav from "./containers/Nav";
import MapPage from "./pages/MapPage";

class App extends Component {
  state = {
    userIsSignedIn: !!localStorage.getItem("auth_token"),
    center: {}
  };

  userSignedIn = () => {
    this.setState({ userSignedIn: true });
  };

  userSignedOut = () => {
    localStorage.removeItem("auth_token");
    this.setState({ userSignedIn: false });
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(result => {
      const coords = {
        lat: result.coords.latitude,
        lng: result.coords.longitude
      };
      this.setState({ center: coords });
    });
  };

  render() {
    return (
      <div className="App">
        <Nav
          userIsSignedIn={this.state.userIsSignedIn}
          userSignedIn={this.userSignedIn}
          userSignedOut={this.userSignedOut}
        />
        {this.state.userIsSignedIn ? (
          <MapPage center={this.state.center} />
        ) : (
          <header className="App-header">Makan Map</header>
        )}
      </div>
    );
  }
}

export default App;
