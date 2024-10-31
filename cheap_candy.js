let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Starburst", price: 2.79},
    {product: "Sour Punch Straws", price: 3.50},
    {product: "Nerds", price: 1.79},
    {product: "Nerds Rope", price: 3.20},
    {product: "Pop Rocks", price: 1.50},
    {product: "Hershey Bar", price: 2.70},
    {product: "Sour Gummy Worms", price: 5.90},
];
// Which candies costs less than $4.00?
let cheap = products.filter((value) => value.price < 4).forEach (value=> console.log(value.product))


// for(let i = 0; i < cheap.length; i++){
//     console.log(cheap[i].product);
// }

// products.filter(p=> p.price < 4).forEach(p=> console.log(p.product));




// Which candies has "M&M" its name?


 
// products.filter(p=> p.product.includes("M&Ms")).forEach(p=> console.log(p.product));









