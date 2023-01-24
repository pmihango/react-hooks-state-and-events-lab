import React from "react";
import {useState} from "react";

function Item({ name, category }) {

  const [add, setIsAdd] = useState(false);
  function handleClick() {
    setIsAdd((add) => !add)
  }

  const liClass = add ? "in-cart" : ""
  const addClass = add ? "remove" : "add"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addClass} onClick={handleClick}>Add to Cart</button>
    </li>
  );
}
export default Item;