import React, { useState } from "react";
import ProductInformation from "./ProductInformation";
import ViewCart from "./ViewCart";

const Product = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [viewCart, setViewCart] = useState(false);

    let products = [
        {name: "Safeguard", description: "Safeguard Pure White Tripid Bar Soap", price: 70.00},
        {name: "Palmolive", description: "Palmolive Naturals Intensive Moisture Shampoo 400ml", price: 199.00},
        {name: "Milo", description: "Milo Powdered Choco Malt Milk Drink 600g", price: 209.00},
        {name: "Sponge", description: "Scotch Brite Sponge Value Pack 3s", price: 106.00},
        {name: "Joy Dishwashing Liquid", description: "Joy Dishwashing Liquid Antibac Hygine 1000ml", price: 305.00},
        {name: "Petroleum Jelly", description: "Vaseline Petroleum Jelly 100ml", price: 118.00},
        {name: "Corned Beef", description: "Argentina Corned Beef 260g Pack of 3", price: 177.00},
        {name: "Century Tuna Flakes", description: "Century Tuna Flakes in Oil 155g Pack of 3", price: 114.00},
        {name: "San Marino Corned Tuna", description: "San Marino Corned Tuna Chili 180g", price: 54.00},
        {name: "Purefoods Sisig", description: "Purefoods Sizzling Delights Sisig (150g) Set of 2", price: 92.00}
    ];

    const addToCart = (productToAdd) => {
        const existingProduct = cart.find(product => product.name === productToAdd.name);
        if (existingProduct) {
            const updatedCart = cart.map(product => 
                product.name === productToAdd.name ? {...product, quantity: product.quantity + 1} : product
            );
            setCart(updatedCart);
        } else {
            const newCart = [...cart, {...productToAdd, quantity: 1}];
            setCart(newCart);
        }
        setTotalPrice(prevTotal => prevTotal + productToAdd.price);
    };

    const removeFromCart = (productToRemove) => {
        const updatedCart = cart.filter(item => item.name !== productToRemove.name);
        setCart(updatedCart);
        setTotalPrice(prevTotal => prevTotal - (productToRemove.price * productToRemove.quantity));
    };

    const handleCheckout = () => {
        alert("Thank you for your purchase!");
        setCart([]);
        setTotalPrice(0);
        setViewCart(false);
    };

    return (
        <>
            {viewCart ? (
                <ViewCart
                    cart={cart}
                    totalPrice={totalPrice}
                    removeFromCart={removeFromCart}
                    checkout={handleCheckout}
                />
            ) : (
                <div id="products">
                    {products.map((product, index) => (
                        <div className="product" key={index}>
                            <ProductInformation name={product.name} description={product.description} price={product.price}/>
                            <button className="btnAddToCart" onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            )}

            <button onClick={() => setViewCart(!viewCart)}>
                {viewCart ? "Back to Products" : "View Cart"}
            </button>
        </>
    );
}

export default Product;
