// STATE = STATE IS PREFERRED BECAUSE IT HOLDS INFORMATION AND THE INFORMATION MAY CHANGE OVER THE LIFETIME OF THAT COMPONENT COMPARED TO PROPS
import { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Count value is: {this.state.counter}</h1>
        <button onClick={() => this.increment()}>Click</button>
        <button onClick={() => this.decrement()}>Click</button>
      </div>
    );
  }
}
export default Counter;
