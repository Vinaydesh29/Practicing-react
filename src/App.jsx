import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import BasicClass from "./BasicClass";
import Child from "./Child";
import Parent from "./Parent";
import styled from "styled-components";
import Promise from "./Promise";
import Groups from "./Groups";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";
import UseCallBack from "./UseCallBack";
import Input from "./Input";
import Local from "./Local";
import ControlForm from "./ControlForm";
export const NameContext = createContext();
function App() {
  const [val, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const [name, setName] = useState("");
  const handleSubmit = () => {
    setName(val);
  };
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme((pev) => (pev === "light" ? "dark" : "light"));
  };
  return (
    // <NameContext.Provider value={{ name, theme }}>
    //   <input type="text" onChange={handleChange} />
    //   <button onClick={handleSubmit}>Submit</button>
    //   <button onClick={handleTheme}>ChangeTheme</button>
    //   <Groups />
    // </NameContext.Provider>
    <ControlForm />
  );
}

export default App;
