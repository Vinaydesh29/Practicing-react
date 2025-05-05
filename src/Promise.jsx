import { useEffect, useState } from "react";

function Promise() {
  const [data, setData] = useState("");
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
      <p>{title}</p>
      <h3>{body}</h3>
    </>
  );
}

export default Promise;
