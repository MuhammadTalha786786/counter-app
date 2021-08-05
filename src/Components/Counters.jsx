import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
    ],
  };

  styles = {
    fontFamily: "Open Sans",
    fontSize: 20,
  };

  handleDelete = (CounterID) => {
    // let counters = this.state.counters.filter((c) => c.id !== CounterID.id);
    // this.setState({ counters: counters });
    //Deleting the counter

    this.setState((prevState) => ({
      counters: prevState.counters.filter((item) => item.id !== CounterID),
    }));
  };
  renderCounter = () => {
    if (this.state.counters.length === 0)
      return (
        <h3
          style={this.styles}
          className="justify-content-center text-center mt-5 text-danger"
        >
          No Counter Avaliable.
        </h3>
      );
  };

  render() {
    return (
      <>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            counter={counter}
            key={counter.id}
          />
        ))}
        {this.renderCounter()}
      </>
    );
  }
}

export default Counters;
