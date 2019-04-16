import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { PinDrop } from "@material-ui/icons";
import axios from "axios";

class MapPage extends Component {
  state = {
    currentBounds: {}
  };

  handleMapChange = result => {
    console.log(this.state);
    this.updateBoundaryCoords(result);
    this.retrieveListings();
  };

  retrieveListings = () => {
    axios
      .get("http://localhost:3001/api/v1/listings", {
        params: { bounds: { ...this.state.currentBounds } }
      })
      .then(result => {
        this.setState({ listings: Object.values(result.data) });
      });
  };

  updateBoundaryCoords = result => {
    this.setState({ currentBounds: result.bounds });
  };

  returnPinDrops = () =>
    this.state.listings.map(listing => {
      return (
        <PinDrop
          lat={listing.latitude}
          lng={listing.longitude}
          style={{ zIndex: "1" }}
        />
      );
    });

  render() {
    return (
      <GoogleMapReact
        style={{ width: "100%", height: "100vh" }}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={{ lat: this.props.center.lat, lng: this.props.center.lng }}
        zoom={15}
        onGoogleApiLoaded={this.handleMapChange}
        onChange={this.handleMapChange}
      >
        {this.state.listings ? this.returnPinDrops() : function() {}}
      </GoogleMapReact>
    );
  }
}

export default MapPage;
