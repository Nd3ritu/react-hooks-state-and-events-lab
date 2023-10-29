import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [select, setSelect] = useState("All");

  function handleCategory(e) {
    setSelect(e.target.value);
  }

  const filterItems =
    select === "All" ? items : items.filter((item) => item.category === select);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory} value={select}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
