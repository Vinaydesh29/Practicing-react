import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import BasicClass from "./BasicClass";
import Child from "./Child";
import Parent from "./Parent";
import styled from "styled-components";
import Promise from "./Promise";
function App() {
  const [count, setCount] = useState("");

  const handleCount = (val) => {
    setCount(val);
  };
  const Para = styled.h1`
    ont-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;
  return (
    <>
      <Parent />
      <Para> im using styled component</Para>
      <Promise />
    </>
  );
}

export default App;
