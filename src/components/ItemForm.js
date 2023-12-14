import React, {useState} from "react";
import Filter from "./Filter";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [name, setItemName] = useState("");
  const [category, setItemCategory] = useState("Produce");

  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }

  function handleNewItemCategory(event) {
    setItemCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category
    })
  }

  return (
    <form className="NewItem" onSubmit={event => handleSubmit(event)}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
