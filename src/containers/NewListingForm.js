import React, { Component } from "react";
import { Dialog, Input, Select, InputLabel } from "@material-ui/core";
import axios from "axios";
import humps from "humps";

class NewListingForm extends Component {
  state = {
    listing: {
      name: "",
      address: "",
      secondaryAddress: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      type: ""
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/v1/listings", {
        ...humps.decamelizeKeys(this.state.listing)
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInputChange = event => {
    const listingState = { ...this.state.listing };
    listingState[event.target.name] = event.target.value;

    this.setState({ listing: listingState });
  };

  render() {
    return (
      <Dialog open={this.props.isOpen}>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="name"
              placeholder="Business Name"
              value={this.state.listing.name}
            />
          </div>
          <div>
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="address"
              placeholder="Address"
              value={this.state.listing.address}
            />
          </div>
          <div>
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="secondaryAddress"
              placeholder="Unit Number"
              value={this.state.listing.secondaryAddress}
            />
          </div>
          <div>
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="city"
              placeholder="City"
              value={this.state.listing.city}
            />
          </div>
          <div>
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="state"
              placeholder="State"
              value={this.state.listing.state}
            />
          </div>
          <div>
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="zipCode"
              placeholder="Zip"
              value={this.state.listing.zipCode}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <InputLabel>Type</InputLabel>
            <Select
              native={true}
              name="type"
              onChange={this.handleInputChange}
              value={this.state.listing.type}
            >
              <option>Restaurant</option>
              <option>Coffeeshop</option>
              <option>Bar</option>
            </Select>
          </div>
          <div>
            <Input type="submit" />
          </div>
        </form>
      </Dialog>
    );
  }
}

export default NewListingForm;
