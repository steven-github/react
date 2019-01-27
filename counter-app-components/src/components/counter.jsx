//Shortcut: imrc
import React, { Component } from "react";
//Shortcut: cc
class Counter extends Component {
  // Single Source of Truth: one master state for most/all of your application
  // state = {
  //   value: this.props.counter.value
  // };

  // Single Source of Truth: one master state for most/all of your application
  // handleIncrement = () => {
  //   // TypeError: Cannot assign to read only property 'value' of object '#<Object>'
  //   // this.props.value = 0;
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // console.log("props", this.props);
    return (
      <div>
        {/* {this.props.children}
        <h4>Counter #{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        {/* Handling Events: passing function reference*/}
        {/* <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
          Increment
        </button> */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    // Single Source of Truth// Single Source of Truth
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { value } = this.state;
    // Single Source of Truth: one master state for most/all of your application
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
