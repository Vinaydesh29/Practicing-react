import { use, useCallback, useState } from "react";
import List from "./List";

function UseCallBack() {
  const [num, setNum] = useState(1);
  const handleChange = (e) => {
    setNum(parseInt(e.target.value));
  };
  const [dark, setDark] = useState(false);
  const style = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  const handleClick = () => {
    setDark((prev) => (prev ? false : true));
  };
  const Operation = useCallback(
    (val) => {
      return [num, num + val + 1, num + val + 2];
    },
    [num]
  );
  return (
    <div style={style}>
      <input type="number" onChange={handleChange} />
      <button onClick={handleClick}> Change Theme</button>
      <List Operation={Operation} />
    </div>
  );
}
export default UseCallBack;
