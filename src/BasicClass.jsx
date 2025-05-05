import { Component } from "react";

class BasicClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      name: this.props.name,
      func: this.props.setCount,
    };
  }
  handleClick = () => {
    this.setState({ num: this.state.num + 1 });
    this.state.func("hello world");
  };
  handleClick2 = () => {
    this.state.func("hello world");
  };
  render() {
    return (
      <>
        <h1>Child</h1>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>{this.state.name}</button>
        <button onClick={this.handleClick2}>set name</button>
      </>
    );
  }
}
export default BasicClass;
