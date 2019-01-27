import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      //   <div>
      //     <Counter />
      //     <Counter />
      //     <Counter />
      //     <Counter />
      //   </div>
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          // s<Counter key={counter.id} value={counter.value} selected={true} />
          //   <Counter key={counter.id} value={counter.value} />
          //   <Counter key={counter.id} value={counter.value} id={counter.id}>
          //     <h4>Counter #{counter.id}</h4>
          //   </Counter>
          //   <Counter
          //     key={counter.id}
          //     onDelete={this.handleDelete}
          //     value={counter.value}
          //     id={counter.id}
          //   />
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // this.setState({ counters: counters });
    // Since the key and value are the same we can have this way:
    this.setState({ counters });
  };

  //Arrow function
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    console.log("counter", counter);
    // Spread operator to clone the array and get a new array of counters
    const counters = [...this.state.counters];
    debugger;
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
}

export default Counters;
