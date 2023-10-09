import { Component } from "react";

class Destructuring2 extends Component{
    render(){
        const {name} = this.props;
        return <h1>This is Destructuring in a class based component {name}</h1>
    }
}
export default Destructuring2;