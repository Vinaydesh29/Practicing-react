import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Promise() {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Local");
  };
  useEffect(() => {
    async function Fetching() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      let val = await data.json();
      setData(val);
    }
    Fetching();
  }, []);
  const { title, body } = data;
  return (
    <>
      <h1>Promise</h1>
      <p>{title}</p>
      <h3>{body}</h3>
      <button onClick={handleClick}>Go to Local</button>
    </>
  );
}

export default Promise;
