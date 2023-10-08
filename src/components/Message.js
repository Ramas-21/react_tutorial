// PROPS IN A CLASS BASED COMPONENT

import { Component } from "react";

// PROPS ARE IMMUTABLE = READ ONLY = YOU CANNOT CHANGE DATA ASSIGNED TO PROPS
class Message extends Component {
  render() {
    return <h1>Message: {this.props.messageContent}</h1>;
  }
}
export default Message;
