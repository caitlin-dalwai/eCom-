// storage from product
let cart = JSON.parse(localStorage.getItem('purchasedItems')) ;


// loading pg 
window.onload = () => {
  document.getElementById('loadBg').style.display = 'none';
  document.getElementById('disSec').style.display = 'block';
};

let d = new Date();

let dt = document.getElementById('date');
dt.innerHTML = d;

let place = document.getElementById('cartD')
let body = document.querySelector('tbody')

// function displayProducts(){

//     cart.forEach(item =>{
//     body.innerHTML += `
//    <table class="table">
//               <tr>
//                 <th scope="row"><img src="${item.image}" alt="img" style="width: 50px; height: 60px;"></th>
//                 <td>${item.name}</td>
//                 <td>${item.category}</td>
//                 <td>${item.quantity}</td>
//                 <td>${item.price}</td>
//                 <td><button id=${item.id}>Remove</button></td>
//               </tr>
//               </tbody>
//     `
// })}
// displayProducts()

// function removeFromCart(id) {
//   // let cart = JSON.parse(localStorage.getItem('purchasedItems')) || [];
//   cart = cart.filter(item => item.id != id);
//   localStorage.setItem('purchasedItems', JSON.stringify(cart));
//   displayProducts();
// }
// function displayItems() {
// }

function displayProducts() {
  body.innerHTML = ''
  cart.forEach(item => {
    body.innerHTML += `
      <table class="table">
        <tr>
          <th scope="row"><img src="${item.image}" alt="img" style="width: 50px; height: 60px;"></th>
          <td>${item.name}</td>
          <td>${item.category}</td>
          <td>${item.quantity}</td>
          <td>${item.price}</td>
          <td><button id="${item.id}" class="remove-btn">Remove</button></td>
        </tr>
      </tbody>
    `;
  
    // Add event listener to the "Remove" button
    const removeBtn = document.getElementById(item.id);
    removeBtn.addEventListener('click', () => {
      removeFromCart(item.id);
      
    });
  });
}displayProducts();



