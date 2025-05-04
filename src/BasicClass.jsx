import { Component } from "react";

class BasicClass extends Component {
  state = { num: 0 };
  handleClick = () => {
    this.setState({ num: this.state.num + 1 });
  };
  render() {
    return (
      <>
        <h1>{this.state.num}</h1>
        <button onClick={this.handleClick}>click</button>
      </>
    );
  }
}
export default BasicClass;
