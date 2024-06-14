// storage from product
let cart = JSON.parse(localStorage.getItem('purchasedItems')) ;

// loading pg 
// window.onload = () => {
//     document.getElementById('loadBg').style.display = 'none';
//     document.getElementById('disSec').style.display = 'block';
//   };

let place = document.getElementById('cartD')
let body = document.querySelector('tbody')

function displayProducts(){

    cart.forEach(item =>{
    body.innerHTML += `
   <table class="table">
              <tr>
                <th scope="row"><img src="${item.image}" alt="img" style="width: 50px; height: 60px;"></th>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td><button id="btnP">Edit</button></td>
                <td><button id="btnP">Delete</button></td>
              </tr>
              </tbody>
    `
})}
displayProducts()



