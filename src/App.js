import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  // Initialize items state directly from localStorage if available
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  // Save items to localStorage whenever the items array changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Function to add a new item
  const getItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to delete an item by orderId
  const deleteItem = (orderId) => {
    setItems((prevItems) => prevItems.filter((item) => item.orderId !== orderId));
  };

  return (
    <div className="App">
      <Form getList={getItems} />
      <List items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
