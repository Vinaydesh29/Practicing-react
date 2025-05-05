import { Component } from "react";

class ClassChild extends Component {
  componentWillUnmount() {
    console.log("unmounted");
  }
  render() {
    return (
      <>
        <h1>hello iam child Class</h1>
      </>
    );
  }
}
export default ClassChild;
