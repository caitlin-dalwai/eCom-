// let adm = JSON.parse(localStorage.getItem('purchasedItems'));
// // let items = JSON.parse(localStorage.getItem('items'));
// let place = document.getElementById('productsTableBody')
// // let body = document.querySelector('tbody')

// function displayProducts(){

//     adm.forEach(item =>{
//     place.innerHTML += `
//    <table class="table">
//               <tr>
//                 <th scope="row"><img src="${item.image}" alt="img" style="width: 50px; height: 60px;"></th>
//                 <td>${item.name}</td>
//                 <td>${item.category}</td>
//                 <td>${item.quantity}</td>
//                 <td>${item.price}</td>
//               </tr>
//     `
// })}
// displayProducts()

let d = new Date();

let dt = document.getElementById('date');
dt.innerHTML = d;

// loading pg 
window.onload = () => {
    document.getElementById('loadBg').style.display = 'none';
    document.getElementById('disSec').style.display = 'block';
  };

// Product letructor
function CreateItem(id, image, name, price, category, description, quantity){
    this.id = id
    this.image = image
    this.name = name
    this.price = price
    this.category = category
    this.description = description
    this.quantity = quantity
}
// Sample data for initialization
let prod1 = new CreateItem(1, 'https://i.postimg.cc/BnvGvNYc/Group-8.png', 'Rare Blush', 400, 'Cosmetic Product', 'Elevate your makeup look with this stunning, richly pigmented blush that adds a touch of silk color to your cheeks. Rare Beauty, founded by renowned artist Selena Gomez, brings you this unique shade crafted to complement a variety of skin tones.', 0)

let prod2 = new CreateItem(2, 'https://i.postimg.cc/43t249gQ/Makeup-1.png', 'Red Dior Lipstick', 300, 'Cosmetic Product', 'Dior Lipstick Red is a bold statement shade that exerts confidence and glamour. With its vibrant, classic red colour, it instantly elevates any look. Indulge in the velvety smooth application of Diors lipstick formula, which glides effortlessly onto the lips.', 0)

let prod3 = new CreateItem(3, 'https://i.postimg.cc/PJfSMV8S/Light-Reflecting-Advanced-Skincare-Foundation-NARS-Sephora-1.png', 'NARS foundation', 200, 'Cosmetic Product','Indulge in the luxurious formulas crafted with skin-loving ingredients that nourish and enhance your natural beauty. From silk to full coverage, each foundation seamlessly blends into the skin, blurring imperfections and creating a smooth, flawless canvas.',0)

let prod4 = new CreateItem(4, 'https://i.postimg.cc/WzPBPcfS/Solid-Padded-Headband-1.png', 'Red Headband', 100, 'Tool','Crafted with comfort and convenience in mind, features a stretchy design that provides a comfortable fit.', 0)

let prod5 = new CreateItem(5, 'https://i.postimg.cc/MpGhwDdk/Chanel-Makeup-Brushes-New-Design-The-Beauty-Look-Book-1.png', 'Chanel Brushes', 350, 'Cosmetic Product', 'These durable brushes come in a set of 10. Feels like you applying your makeup with silk. Easy to clean and looks luxurious', 0 )

let prod6 = new CreateItem(6, 'https://i.postimg.cc/7ZQjZ2W5/download-1-1.png', 'Beauty Blender', 50, 'Tool', 'Extra bouncy which aids in a smooth finish. Easy to clean and durable. Non stick tool that transfers all product on skin', 0) 
// Array to store items
let items = [prod1, prod2, prod3, prod4, prod5, prod6]
// Function to display products in the table
function displayProducts() {
    let productsTableBody = document.getElementById('productsTableBody');
    productsTableBody.innerHTML = '';
    items.forEach((product, index) => {
        let row = `
            <tr>
                <td><img src="${product.image}" alt="${product.name}" class="img-thumbnail" style="width: 100px; height: 100px;"></td>
                <td>${product.name}</td>
                <td>R ${product.price.toFixed(2)}</td> <!-- Displaying price in Rands -->
                <td>
                    <button class="btn btn-info btn-sm" onclick="editProduct(${index})" id="edit-btn">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;
        productsTableBody.innerHTML += row;
    });
}
// Function to delete a product
function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        displayProducts();
    }
}
// Function to edit a product
// Function to edit a product
function editProduct(index) {
    let product = items[index];
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductImage').value = product.image;
    // Update submit event to save changes
    document.getElementById('editProductForm').onsubmit = function (e) {
        e.preventDefault();
        product.name = document.getElementById('editProductName').value;
        product.price = parseFloat(document.getElementById('editProductPrice').value);
        product.image = document.getElementById('editProductImage').value;
        localStorage.setItem('items', JSON.stringify(items));
        displayProducts();
        let editProductModal = new bootstrap.Modal(document.getElementById('editProductModal'));
        editProductModal.hide();
    };
    // Show modal for editing product
    let editProductModal = new bootstrap.Modal(document.getElementById('editProductModal'));
    editProductModal.show();
    // Handle modal close event
    editProductModal.addEventListener('hidden.bs.modal', function () {
        // Clear form and reset submit event
        document.getElementById('editProductForm').reset();
        document.getElementById('editProductForm').onsubmit = null;
    });
}
// Function to sort products by price
document.getElementById('sortProductsBtn').addEventListener('click', function () {
    items.sort((a, b) => a.price - b.price);
    localStorage.setItem('items', JSON.stringify(items));
    displayProducts();
});
// Initialize
displayProducts();
// Function to add a new product
document.getElementById('addProductBtn').addEventListener('click', function () {
    let addProductModal = new bootstrap.Modal(document.getElementById('addProductModal'));
    addProductModal.show();
    // Handle form submission for adding a product
    document.getElementById('addProductForm').onsubmit = function (e) {
        e.preventDefault();
        // Generate a unique ID for the new product
        let newProductId = items.length + 1;
        // Create a new product object
        let newProduct = new CreateItem(
            newProductId,
            document.getElementById('productName').value,
            'Uncategorized',  // You can add category input if needed
            document.getElementById('productImage').value,
            '',  // Optional: Add description input if needed
            parseFloat(document.getElementById('productPrice').value),
            1   // Default quantity
        );
        // Add the new product to the items array
        items.push(newProduct);
        // Update local storage
        localStorage.setItem('items', JSON.stringify(items));
        // Display updated products
        displayProducts();
        // Close the modal
        addProductModal.hide();
        // Reset the form
        document.getElementById('addProductForm').reset();
    };
});







