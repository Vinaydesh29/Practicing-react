import { useEffect, useState } from "react";

function List({ Operation }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(Operation(5));
    console.log("Callback");
  }, [Operation]);

  return (
    <ul>
      {items.map((items, index) => {
        return <li key={index}>{items}</li>;
      })}
    </ul>
  );
}
export default List;
