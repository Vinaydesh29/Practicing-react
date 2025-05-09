import { useRef, useState } from "react";

function ControlForm() {
  const val = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("name :" + val.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={val} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ControlForm;
