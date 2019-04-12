import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { PinDrop } from "@material-ui/icons";
import axios from "axios";

class MapPage extends Component {
  state = {
    center: {
      lat: "42.3564",
      long: "-71.0617"
    },
    currentBounds: {}
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(result => {
      const coords = {
        lat: result.coords.latitude,
        long: result.coords.longitude
      };
      this.updateCenterCoords(coords);
    });
  }

  handleMapChange = result => {
    this.updateBoundaryCoords(result);
    this.retrieveMarkers();
  };

  retrieveMarkers = () => {
    axios
      .get("http://localhost:3001/api/v1/listings", {
        params: { bounds: { ...this.state.currentBounds } }
      })
      .then(result => {
        console.log(result);
      });
  };

  updateCenterCoords = coords => {
    this.setState({ center: coords });
  };

  updateBoundaryCoords = result => {
    this.setState({ currentBounds: result.bounds });
  };

  render() {
    return (
      <GoogleMapReact
        style={{ width: "100%", height: "100vh" }}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        zoom={11}
        onGoogleApiLoaded={this.handleMapChange}
        onChange={this.handleMapChange}
      >
        <PinDrop lat={42.3564} lng={-71.0617} />
      </GoogleMapReact>
    );
  }
}

export default MapPage;
