import React, { useState } from "react";
import "./styles/form.css";

export default function Form(props) {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("table1");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      orderId: orderId,
      price: price,
      dishName: dish,
      tableNo: table,
    };
    props.getList(newItem);

    // Clear form fields after submission
    setOrderId("");
    setPrice("");
    setDish("");
    setTable("table1");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="orderId">Unique order ID</label>
      <input
        type="text"
        id="orderId"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />

      <label htmlFor="price">Choose Price</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label htmlFor="dish">Choose Dish</label>
      <input
        type="text"
        id="dish"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
      />

      <label htmlFor="table">Select Table</label>
      <select
        id="table"
        value={table}
        onChange={(e) => setTable(e.target.value)}
      >
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>

      <button type="submit">Add to bill</button>
    </form>
  );
}
