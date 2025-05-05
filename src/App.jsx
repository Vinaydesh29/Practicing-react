import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicClass from "./BasicClass";
import Child from "./Child";
import Parent from "./Parent";
function App() {
  const [count, setCount] = useState("");

  const handleCount = (val) => {
    setCount(val);
  };
  return (
    <>
      <Parent />
    </>
  );
}

export default App;
