import { Component } from "react";

class ClassEvent extends Component{
    handleClick(){
        console.log("Class Based Event Handling");
    }
    render (){
        return(
            <div>
                <h2>This a class based Event handling</h2>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default ClassEvent;