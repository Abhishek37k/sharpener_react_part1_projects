import "./Orders.css";

export const Orders = ({ orderList, deleteHandler }) => {
 
  const totalPrice = orderList.reduce((sum, order) => sum + Number(order.price), 0);

  return (
    <div className="orders">
      <ul>
        {orderList.map((order) => (
           <li key={order.orderId} className="order-item">
           <span className="order-id">🆔 {order.orderId} </span> 
           <span className="order-dish">🍽 {order.dish} </span> 
           <span className="order-price">💰 ₹{order.price} </span>
           <button onClick={() => deleteHandler(order.orderId)}>❌ Delete</button>
         </li>
        ))}
      </ul>

   
      <h3>Total bill of the dishes in the list is = {totalPrice}</h3>
    </div>
  );
};
