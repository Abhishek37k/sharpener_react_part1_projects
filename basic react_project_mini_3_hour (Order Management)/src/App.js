import { useState, useEffect } from "react";
import "./App.css";
import { OrderForm } from "./components/OrderForm";
import { Orders } from "./components/Orders";

function App() {
  const [orderList, setOrderList] = useState([]);

  // Load orders from local storage on initial render
  useEffect(() => {
    const loadedOrderList = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const orderData = JSON.parse(localStorage.getItem(key));
      if (orderData) {
        loadedOrderList.push(orderData);
      }
    }
    setOrderList(loadedOrderList);
  }, []);

  // Save orders to local storage whenever orderList updates
  useEffect(() => {
    orderList.forEach((order) => {
      localStorage.setItem(order.orderId, JSON.stringify(order));
    });
  }, [orderList]);

  // Function to add a new order
  function addOrder(orderDetail) {
    setOrderList((prevOrders) => [...prevOrders, orderDetail]);
  }

  // Function to delete an order
  const deleteOrder = (orderId) => {
    setOrderList((prevOrders) => prevOrders.filter((order) => order.orderId !== orderId));
    localStorage.removeItem(orderId);
  };

  return (
    <div className="App">
      <h1>Restaurant Order Management</h1>
      <OrderForm addOrder={addOrder} />
      <Orders orderList={orderList} deleteHandler={deleteOrder} />
    </div>
  );
}

export default App;
