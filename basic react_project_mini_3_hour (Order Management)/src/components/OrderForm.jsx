import "./OrderForm.css";

import { useState } from "react";

export const OrderForm = ({ addOrder }) => {
  const [orderInfo, setOrderinfo] = useState({
    orderId: "",
    price: "",
    dish: "",
  });
  const submitForm = (event) => {
    event.preventDefault();
    const newOrder = {
      orderId: orderInfo.orderId,
      price: orderInfo.price,
      dish: orderInfo.dish,
    };
    addOrder(newOrder);
    setOrderinfo({
      orderId: "",
      price: "",
      dish: "",
    });
  };
  function handleInputChange(event) {
    const { name, value } = event.target;
    setOrderinfo({
      ...orderInfo,
      [name]: value,
    });
  }

  return (
    <div>
      <form className="submit-form" onSubmit={submitForm}>
        <div className="label-input-container">
          <label htmlFor="order_id">Unique Order ID:</label>
          <input
            type="number"
            id="order_id"
            placeholder="Enter Unique key"
            required
            name="orderId"
            value={orderInfo.orderId}
            onChange={handleInputChange}
          />
        </div>

        <div className="label-input-container">
          <label htmlFor="price">Choose Price:</label>
          <input
            type="number"
            id="price"
            placeholder="Choose Price"
            name="price"
            required
            value={orderInfo.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="label-input-container">
          <label htmlFor="dish">Choose Dish:</label>
          <input
            type="text"
            id="dish"
            placeholder="Choose Dish"
            name="dish"
            required
            value={orderInfo.dish}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Add to Bill
        </button>
      </form>
    </div>
  );
};
