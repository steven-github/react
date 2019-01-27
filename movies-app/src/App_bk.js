import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { MessageComponent } from "./MessageComponent";
import { FormComponent } from "./FormComponent";

export class App extends Component {
  state = {
    name: this.props.name,
    message: this.props.message
  };

  // submitEvent = e => {
  //   const name = e.target.name.value;
  //   e.preventDefault();
  //   if (typeof name === "string" && name.length > 0) {
  //     this.setState({
  //       name: e.target.name.value
  //     });
  //     e.target.name.value = "";
  //   }
  // };

  // setNewName = (name, message) => {
  //   this.setState({
  //     name: name,
  //     message: message
  //   });
  // };

  setNewData = data => {
    // this.setState({
    //   name: data.name,
    //   message: data.message
    // });
    this.setState(data);
  };

  render() {
    //const { name, message } = this.props;
    const { name, message } = this.state;
    //const { message } = this.props;

    return (
      <Grid>
        {/* <h2>Hola {name}</h2>
        <p>{message}</p>
        <form onSubmit={this.submitEvent}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" id="name" name="name" />
            <Button type="submit">Send</Button>
          </FormGroup>
        </form> */}
        <MessageComponent name={name} message={message} />
        <FormComponent onGetNewData={this.setNewData} />
      </Grid>
    );
  }
}

App.defaultProps = {
  name: "React",
  message: "Mensaje por defecto..."
};

export default App;
