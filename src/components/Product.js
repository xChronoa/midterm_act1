import ProductInformation from "./ProductInformation";

// E. Component-based Architecture 
// Product Component
const Product = () => {
    let products = [
        {name: "Safeguard", description: "Safeguard Pure White Tripid Bar Soap", price: 70.00},
        {name: "Palmolive", description: "Palmolive Naturals Intensive Moisture Shampoo 400ml", price: 199.00},
        {name: "Milo", description: "Milo Powdered Choco Malt Milk Drink 600g", price: 209.00},
        {name: "Sponge", description: "Scotch Brite Sponge Value Pack 3s", price: 106.00},
        {name: "Joy Dishwashing Liquid", description: "Joy Dishwashing Liquid Antibac Hygine 1000ml", price: 305.00},
        {name: "Petroleum Jelly", description: "Vaseline Petroleum Jelly 100ml", price: 118.00},
        {name: "Corned Beef", description: "Argentina Corned Beef 260g Pack of 3", price: 177.00},
        {name: "Century Tuna Flakes", description: "entury Tuna Flakes in Oil 155g Pack of 3", price: 114.00},
        {name: "San Marino Corned Tuna", description: "San Marino Corned Tuna Chili 180g", price: 54.00},
        {name: "Purefoods Sisig", description: "Purefoods Sizzling Delights Sisig (150g) Set of 2", price: 92.00}
    ];

    return(
        <>
            {/* Add each individual product information to product information component */}
            <div id="products">
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <ProductInformation name={product.name} description={product.description} price={product.price}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Product;