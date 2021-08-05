import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    tags: ["New tags"],
  };

  styles = {
    fontFamily: "Open Sans",
    fontSize: 20,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  rendertags = () => {
    if (this.state.tags.length === 0) return <p>No tags.</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };
  render() {
    return (
      <>
        <div className="justify-content-center text-center mt-5">
          <span style={this.styles} className={this.getNewClassBadge()}>
            {this.formatCount()}
          </span>
          <button
            onClick={this.handleIncrement}
            style={this.styles}
            className="btn btn-sm btn-secondary"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            style={this.styles}
            className="btn btn-danger btn-sm m-3"
          >
            Delete
          </button>
        </div>
      </>
    );
  }

  getNewClassBadge() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
