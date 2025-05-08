import { useState } from "react";

function UseCounter(init) {
  const [count, setCount] = useState(init);
  const increment = () => {
    return setCount((prev) => prev + 1);
  };
  const decrement = () => {
    return setCount((prev) => prev - 1);
  };
  const reset = () => {
    return setCount((prev) => init);
  };
  return { count, increment, decrement, reset };
}
export default UseCounter;
