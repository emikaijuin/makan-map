import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class MapPage extends Component {
  state = {};

  render() {
    return (
      <GoogleMapReact
        style={{ width: "100%", height: "100vh" }}
        bootstrapURLKeys={{ key: "AIzaSyBUDWlXGgvD6lw5j-afntTLx5cdRGmV_3c" }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        zoom={11}
      />
    );
  }
}

export default MapPage;
