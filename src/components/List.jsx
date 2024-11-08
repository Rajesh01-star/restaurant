import React from "react";

export default function List({ items, onDelete }) {
  const renderItemsForTable = (table) => {
    return items
      .filter((item) => item.tableNo === table)
      .map((item, index) => (
        <li key={index}>
          Order ID: {item.orderId}, Dish: {item.dish}, Price: ${item.price}
          <button onClick={() => onDelete(item.orderId)}>Delete</button>
        </li>
      ));
  };

  return (
    <section>
      <h2>Orders</h2>

      <h3>Table 1</h3>
      <ul>{renderItemsForTable("table1")}</ul>

      <h3>Table 2</h3>
      <ul>{renderItemsForTable("table2")}</ul>

      <h3>Table 3</h3>
      <ul>{renderItemsForTable("table3")}</ul>
    </section>
  );
}
