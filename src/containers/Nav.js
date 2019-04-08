import React, { Component } from "react";
import { AppBar, Button } from "@material-ui/core";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

class Nav extends Component {
  state = {
    showSignUp: false,
    showSignIn: false,
    userSignedIn: !!localStorage.getItem("auth_token")
  };

  showSignIn = () => this.setState({ showSignIn: true });

  closeSignIn = () => this.setState({ showSignIn: false });

  showSignUp = () => this.setState({ showSignUp: true });

  closeSignUp = () => this.setState({ showSignUp: false });

  userSignedIn = () => {
    this.setState({ userSignedIn: true });
    this.closeSignIn();
    this.closeSignUp();
  };

  userSignedOut = () => {
    localStorage.removeItem("auth_token");
    this.setState({ userSignedIn: false });
  };

  render() {
    return (
      <AppBar>
        {this.state.userSignedIn ? (
          <Button onClick={this.userSignedOut}>Log Out</Button>
        ) : (
          <div>
            <Button onClick={this.showSignIn}>Log In</Button>
            <Button onClick={this.showSignUp}>Sign Up</Button>
          </div>
        )}

        <SignUpModal
          isOpen={this.state.showSignUp}
          handleClose={this.closeSignUp}
          userSignedIn={this.userSignedIn}
        />
        <SignInModal
          isOpen={this.state.showSignIn}
          handleClose={this.closeSignIn}
          userSignedIn={this.userSignedIn}
        />
      </AppBar>
    );
  }
}

export default Nav;
