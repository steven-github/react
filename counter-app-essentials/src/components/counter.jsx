//Shortcut: imrc
import React, { Component } from "react";
//Shortcut: cc
class Counter extends Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200"
    // addres: {
    //   stret: ""
    // }
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  product = {
    id: 1
  };

  /* 
  Approach to bind event handlers:
  constructor() {
    super();
    console.log("Constructor", this);
    // Binding this object to handleIncrement object
    // Bind event handlers to 'this'
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment Clicked", this);
    // obj.method();
    // function();
  }
  */

  handleIncrement = id => {
    console.log("Increment Clicked", this);
    console.log("id", id);
    this.setState({ count: this.state.count + 1 });
  };

  doHandlencrement = () => {
    this.handleIncrement({ id: 1 });
  };

  //Expresion: { this.state.count }
  render() {
    // return (  );

    // let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";

    // let classes = this.getBadgeClasses();

    return (
      // <div>
      //   <h1>Hello World!</h1>
      //   <button>Increment</button>
      // </div>
      <React.Fragment>
        {/* Settings attributes: */}
        {/* <img src={this.state.imageUrl} alt="" /> */}

        {/* <span>{this.state.count}</span> */}
        {/* <span>{this.formatCount()}</span> */}

        {/* Adding css attributes: */}
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}

        {/* Applying inline css properties: */}
        {/* <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}

        {/* <span style={{ fontSize: 50 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}

        {/* Rendering Classes Dynamically */}
        {/* <span className={classes}>{this.formatCount()}</span> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        {/* Handling Events: passing function reference*/}
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* Passing event arguments */}
        <button
          onClick={this.doHandlencrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.handleIncrement(this.product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <ul>
          {/* tag goes to: tag => ... */}
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div>
          {this.state.tags.length === 0 && "Plase create a new tag!"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are not tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // return this.state.count === 0 ? "Zero" : this.state.count;

    //Object Destructuring in ES6
    const { count } = this.state;
    return count === 0 ? "Zero" : count;

    //Returning JSX expression (it gets compiled to react elements):
    // return count === 0 ? <h1>Zero</h1> : count;

    // const x = <h1>Zero</h1>;
    // return count === 0 ? x : count;
  }
}

export default Counter;
