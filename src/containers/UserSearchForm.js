import React, { Component } from "react";
import { Input } from "@material-ui/core";
import axios from "axios";

class UserSearchForm extends Component {
  state = {
    query: ""
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .get("http://localhost:3001/api/v1/users", {
        params: {
          query: this.state.query
        }
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleInputChange}
          value={this.state.query}
          style={{
            backgroundColor: "white"
          }}
        />
        <Input type="submit" />
      </form>
    );
  }
}

export default UserSearchForm;
