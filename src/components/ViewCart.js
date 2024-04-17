import React from "react";

const ViewCart = ({ cart, totalPrice, removeFromCart, checkout }) => {
    return (
        <div id="view-cart">
            <h2>View Cart</h2>
            <p>Total Items: {cart.length}</p>
            <p>Total Price: {totalPrice.toFixed(2)}</p>

            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price.toFixed(2)} - Quantity: {item.quantity}
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>

            <button onClick={checkout}>Checkout</button>
        </div>
    );
}

export default ViewCart;