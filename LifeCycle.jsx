import { Component } from "react";

class LifeCyle extends Component {
  state = {
    num: 0,
  };
  componentDidMount() {
    console.log("did mount");
  }
  handleClick = () => {
    this.setState({ num: this.state.num + 1 });
  };
  shouldComponentUpdate() {
    console.log("before update");
    return true;
  }
  componentDidUpdate() {
    console.log("after update");
  }

  render() {
    return (
      <>
        <h1>Test </h1>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
export default LifeCyle;
