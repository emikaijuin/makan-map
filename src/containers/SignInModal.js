import React, { Component } from "react";
import { Dialog, Button } from "@material-ui/core";

class SignInModal extends Component {
  render() {
    return (
      <Dialog open={this.props.isOpen} onClose={this.props.handleClose}>
        <input />
        <Button>Click me!</Button>
      </Dialog>
    );
  }
}

export default SignInModal;
