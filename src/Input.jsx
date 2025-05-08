import UseCounter from "./UseCounter";

function Input() {
  const { count, increment, decrement, reset } = UseCounter(10);
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default Input;
