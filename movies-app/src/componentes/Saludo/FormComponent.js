import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

export class FormComponent extends Component {
  submitEvent = e => {
    let data = {};
    const name = e.target.name.value;
    const message = e.target.message.value;

    e.preventDefault();

    // if (typeof name === "string" && name.length > 0 && typeof message === "string" && message.length > 0) {
    //   this.props.onNewName(name, message);
    //   e.target.name.value = "";
    //   e.target.message.value = "";
    // }

    if (typeof name === "string" && name.length > 0) {
      data.name = name;
      e.target.name.value = "";
    }

    if (typeof message === "string" && message.length > 0) {
      data.message = message;
      e.target.message.value = "";
    }

    this.props.onGetNewData(data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitEvent}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" id="name" name="name" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Message</ControlLabel>
            <FormControl
              componentClass="textarea"
              id="message"
              name="message"
            />
          </FormGroup>
          <Button type="submit">Send</Button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
