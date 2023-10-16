import { Component } from "react";

class HandlingUserInput extends Component{
    state = {
        firstName: "",
        lastName: "",
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            fname: this.state.firstName,
            lname: this.state.lastName,
        })
    }
    handleLastName =  (event) =>{
        this.setState({
            lastName: event.target.value,
        })
    }
    handleChange = (event) =>{
        this.setState({
            firstName: event.target.value,
        })
    }
    render(){
        return(
        <div>Form
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" value={this.state.firstName}></input>
                <input onChange={this.handleLastName} type="text" value={this.state.lastName}></input>
                <button type="submit">Submit</button>
            </form>
        </div>)
    }
}
export default HandlingUserInput;