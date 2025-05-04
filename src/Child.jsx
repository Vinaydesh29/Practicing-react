function Child({ setCount }) {
  const handleClick = () => {
    setCount("hello");
  };
  return (
    <>
      <h1>child</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
export default Child;
