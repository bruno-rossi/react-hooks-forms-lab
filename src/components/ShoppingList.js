import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    } 
  });
  
  function onSearchChange(event){
    setSearchText(event.target.value);
  }

  const searchedItemsToDisplay = itemsToDisplay.filter(item => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} selectedCategory={selectedCategory} search={search} />
      <ul className="Items">
        {searchedItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
