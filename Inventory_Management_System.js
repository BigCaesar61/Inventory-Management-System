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
 let stockStatus = product.quantity <= product.lowStockLevel ? "Low Stock" : "In stock";
 console.log(`Product Name: ${product.name}`);
 console.log(`Price: $${product.price.toFixed(2)}`);
 console.log(`Quantity in Stock: ${product.quantity}`);
 console.log(`Stock Status: ${stockStatus}`);
};

inventory.forEach(displayProductDetails);

//Task 3: Create a Function to Update Product Stock After Sales

function updateStock(product, unitsSold) {
    product.quantity -= unitsSold;
    if (product.quantity === 0) {
        console.log('${product.name} is out of stock');
    } 
    else if (product.quantity <= product.lowStockLevel) {
        console.log(`${product.name} is low. Current quantity: ${product.quantity}`);
    } 
    else {
        console.log(`Updated Stock for ${product.name}. Current quantity: ${product.quantity}`);
    }
};
