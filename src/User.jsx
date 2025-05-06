import { useContext } from "react";
import { NameContext } from "./App";

function User() {
  const { name, theme } = useContext(NameContext);
  const style = {
    backgroundColor: theme === "light" ? "black" : "white",
    color: theme === "light" ? "white" : "black",
  };
  return (
    <div style={style}>
      <h1>User</h1>
      <h2>hello {name}</h2>
    </div>
  );
}
export default User;
