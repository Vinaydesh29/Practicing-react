import { useEffect, useState } from "react";

function Local() {
  const [input, setInput] = useState("");
  const [get, setGet] = useState("");
  const handleCLick = () => {
    localStorage.setItem("name", input);
  };
  useEffect(() => {
    setGet(localStorage.getItem("name"));
  }, []);
  return (
    <>
      <h1>Local</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleCLick}> submit -{input}</button>
      <p>{get}</p>
    </>
  );
}
export default Local;
