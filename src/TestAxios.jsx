import axios from "axios";
import { useEffect, useState } from "react";

function TestAxios() {
  const [title, setTitle] = useState("sample");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => setTitle(res.data.title));
  }, []);

  return (
    <>
      <p>{title}</p>
    </>
  );
}
export default TestAxios;
