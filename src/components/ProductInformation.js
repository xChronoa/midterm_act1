import React from "react";

// E. Component-based Architecture 
// B. Product Information Display
// ProductInformation Component

const ProductInformation = (props) => {
    return(
        // F. Props Management
        <>
            <h2 className="name">Name: {props.name} </h2>
            <p className="desc">Description: {props.description} </p>
            <p className="price">Price: {props.price.toFixed(2)} </p>
        </>
    );
}

export default ProductInformation;