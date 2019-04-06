import React, { Component } from "react";
import { AppBar, Button } from "@material-ui/core";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

class Nav extends Component {
  state = {
    showSignUp: false,
    showSignIn: false
  };

  showSignIn = () => this.setState({ showSignIn: true });

  showSignUp = () => this.setState({ showSignUp: true });

  closeSignIn = () => this.setState({ showSignIn: false });

  closeSignUp = () => this.setState({ showSignUp: false });

  render() {
    return (
      <AppBar>
        <Button onClick={this.showSignIn}>Log In</Button>
        <Button onClick={this.showSignUp}>Sign Up</Button>

        <SignUpModal
          isOpen={this.state.showSignUp}
          handleClose={this.closeSignUp}
        />
        <SignInModal
          isOpen={this.state.showSignIn}
          handleClose={this.closeSignIn}
        />
      </AppBar>
    );
  }
}

export default Nav;
