//Task 1: Create an Inventory Array of Product Objects

let inventory = [

{name: "Football", price: 26.50, quantity: 200, lowStockLevel: 25},
{name: "Baseball", price: 5.99, quantity: 200, lowStockLevel: 25},
{name: "Soccerball", price: 12.00, quantity: 200, lowStockLevel: 25},
{name: "Cleats", price: 45.99, quantity: 500, lowStockLevel: 100},
{name: "Gloves", price: 15.00, quantity: 500, lowStockLevel: 100},

];


//Task 2: Create a Function to Display Product Details

function displayProductDetails(product) {
 let stockStatus = product.quantity <= product.lowStockLevel ? "In Stock" : "Low Stock";
 console.log(`Product Name: ${product.name}`);
 console.log(`Price: $${product.price.toFixed(2)}`);
 console.log(`Quantity in Stock: ${product.quantity}`);
 console.log(`Stock Status: ${stockStatus}`);
};

inventory.forEach(displayProductDetails);