// STATE = STATE IS PREFERRED BECAUSE IT HOLDS INFORMATION AND THE INFORMATION MAY CHANGE OVER THE LIFETIME OF THAT COMPONENT COMPARED TO PROPS
import { Component } from "react";
class Counter extends Component {
    constructor (){
        super();
        this.state = {
            counter: 0,
        }
    }
    render (){
        return (
        <div>
        <h1>Count value is: {this.state.counter}</h1>
        <button>Click</button>
        </div>
        );
    }
}
export default Counter;