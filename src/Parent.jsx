import { Component } from "react";
import ClassChild from "./ClassChild";

class Parent extends Component {
  state = {
    val: false,
  };
  handleClick = () => {
    this.setState({ val: !this.state.val });
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.val ? "hide" : "show"}
        </button>
        {this.state.val && <ClassChild />}
      </>
    );
  }
}
export default Parent;
