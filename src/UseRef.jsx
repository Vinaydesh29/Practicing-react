import { useRef, useState } from "react";

function UseRef() {
  const [val, setVal] = useState("");
  const text = useRef("");
  const handleClick = () => {
    setVal(text.current.value);
  };
  return (
    <>
      <input type="text" ref={text} />
      <button onClick={handleClick}>submit</button>
      <p>{val}</p>
    </>
  );
}
export default UseRef;
