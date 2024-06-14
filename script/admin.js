let adm = JSON.parse(localStorage.getItem('purchasedItems'));

let place = document.getElementById('productsTableBody')
// let body = document.querySelector('tbody')

function displayProducts(){

    adm.forEach(item =>{
    place.innerHTML += `
   <table class="table">
              <tr>
                <th scope="row"><img src="${item.image}" alt="img" style="width: 50px; height: 60px;"></th>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
              </tr>
    `
})}
displayProducts()

