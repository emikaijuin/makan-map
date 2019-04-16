import React, { Component } from "react";
import { AppBar, Button } from "@material-ui/core";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import NewListingForm from "./NewListingForm";
import UserSearchForm from "./UserSearchForm";

class Nav extends Component {
  state = {
    showSignUp: false,
    showSignIn: false,
    showNewListingForm: false
  };

  showSignIn = () => this.setState({ showSignIn: true });

  closeSignIn = () => this.setState({ showSignIn: false });

  showSignUp = () => this.setState({ showSignUp: true });

  closeSignUp = () => this.setState({ showSignUp: false });

  addListing = () => {
    this.setState({ showNewListingForm: true });
  };

  userSignedIn = () => {
    this.closeSignIn();
    this.closeSignUp();
    this.props.userSignedIn();
  };

  render() {
    return (
      <AppBar>
        {this.props.userIsSignedIn ? (
          <div>
            <Button onClick={this.props.userSignedOut}>Log Out</Button>
            <Button onClick={this.addListing}>Add Listing</Button>
          </div>
        ) : (
          <div>
            <Button onClick={this.showSignIn}>Log In</Button>
            <Button onClick={this.showSignUp}>Sign Up</Button>
          </div>
        )}
        <div>
          <UserSearchForm />
        </div>

        <SignUpModal
          isOpen={this.state.showSignUp}
          handleClose={this.closeSignUp}
          userSignedIn={this.props.userSignedIn}
        />
        <SignInModal
          isOpen={this.state.showSignIn}
          handleClose={this.closeSignIn}
          userSignedIn={this.props.userSignedIn}
        />
        <NewListingForm
          isOpen={this.state.showNewListingForm}
          handleClose={this.closeNewListingForm}
        />
      </AppBar>
    );
  }
}

export default Nav;
