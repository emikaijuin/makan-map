import React, { Component } from "react";
import { Dialog, Input } from "@material-ui/core";
import UserAuth from "../helpers/UserAuth";

class SignInModal extends Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    UserAuth.signIn(this.state.user);
    this.props.userSignedIn();
  };

  handleInputChange = event => {
    const userState = { ...this.state.user };
    userState[event.target.name] = event.target.value;
    this.setState({ user: { ...userState } });
  };

  render() {
    return (
      <Dialog open={this.props.isOpen} onClose={this.props.handleClose}>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <Input
              placeholder="email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.user.email}
            />
          </div>
          <div>
            <Input
              placeholder="password"
              type="password"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.user.password}
            />
          </div>
          <div>
            <Input type="submit">Sign In</Input>
          </div>
        </form>
      </Dialog>
    );
  }
}

export default SignInModal;
