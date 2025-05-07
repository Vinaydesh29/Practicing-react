import { useMemo, useState } from "react";

function UseMemo() {
  const [num, setNum] = useState(0);
  const HandleChange = (e) => {
    setNum(e.target.value);
  };
  const [theme, setTheme] = useState("light");
  const Style = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };
  const handleClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const doubleNumber = useMemo(() => {
    return slowFunction(num);
  }, [num]);
  return (
    <>
      <input type="number" onChange={HandleChange} />
      <button onClick={handleClick}>Change Theme</button>
      <p style={Style}>Value is {doubleNumber} </p>
    </>
  );
}
const slowFunction = (num) => {
  for (let i = 1; i <= 1000; i++) {}
  console.log("slow function");
  return num * num;
};
export default UseMemo;
