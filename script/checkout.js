// storage from product
let cart = JSON.parse(localStorage.getItem('checkout')) || [];

// loading pg 
// window.onload = () => {
//     document.getElementById('loadBg').style.display = 'none';
//     document.getElementById('disSec').style.display = 'block';
//   };

// let place = document.getElementById('cartD')

// function displayProducts(cart){
//     place.innerHTML = ''
//     placeholderForArray.forEach(item =>{
//     place.innerHTML += `
//    <table class="table">
//             <thead>
//               <tr>
//                 <th scope="col"> </th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Category</th>
//                 <th scope="col">Quantity</th>
//                 <th scope="col" value="number">Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th scope="row">${item.image}</th>
//                 <td>${item.name}</td>
//                 <td>${item.category}</td>
//                 <td>${item.quantity}</td>
//                 <td>${item.price}</td>
//               </tr>
//               </tbody>
//           </table>
//     `
// })}
// displayProducts(items)
