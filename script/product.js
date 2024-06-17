let products = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : 
[
  {
  title:"Rare blush",
  category:"Cosmetic Product",
  price:"400",
  img:"https://i.postimg.cc/BnvGvNYc/Group-8.png"
  },
  {
  title:"Red dior lipstick",
  category:"Cosmetic Product",
  price:"300",
  img:"https://i.postimg.cc/43t249gQ/Makeup-1.png"
  },
  
  {
  title:"Nars Foundation",
  category:"Cosmetic Product",
  price:"200",
  img:"https://i.postimg.cc/PJfSMV8S/Light-Reflecting-Advanced-Skincare-Foundation-NARS-Sephora-1.png"
  },
  
  {
  title:"Chanel Brushes",
  category:"Tool",
  price:"350",
  img:"https://i.postimg.cc/MpGhwDdk/Chanel-Makeup-Brushes-New-Design-The-Beauty-Look-Book-1.png"
  },    
  {
  title:"Red Headband",
  category:"Tool",
  price:"150",
  img:"https://i.postimg.cc/WzPBPcfS/Solid-Padded-Headband-1.png"
  },    
  {
  title:"Red Beauty Blender",
  category:"Tool",
  price:"50",
  img:"https://i.postimg.cc/7ZQjZ2W5/download-1-1.png"
  },    
  ]
  console.log(products);

  let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

  function displayProducts(products){
    document.querySelector("#prodMg").innerHTML = "";

    products.forEach((product, position) => {
        document.querySelector("#prodMg").innerHTML += `
        <div class="card d-inline-flex p-2 bd-highlight" style="width: 18rem;">
        <img id="img" class="card-img-top" src="${product.img}" alt="Card image cap">
        <div class="card-body">
            <h4 id="title" class="card-title">${product.title}</h4>
            <h5 id="category" class="card-title">${product.category}</h5>
            <p id="price" class="card-text">R${product.price}</p>
            <div>

        <p> Quantity:</p>
                <input type="number" name="Quantity" class="form-control mb-2" id="quantity${position}" min="1" value="1">
                <button class="btn btn-success mt-1" id="btnP" onclick="addToCart(${position})">Add to cart</button>

            <div/>
        </div>
        </div>
    
      
        `;
    });
}
displayProducts(products);
// CREATE
function createProduct(){
    let img = document.querySelector("#img").value;
    let title = document.querySelector("#title").value;
    let category = document.querySelector("#category").value;
    let price = document.querySelector("#price").value;



    try {
          if (!title || !price || !img) throw new Error("Please fill in all fields");
          products.push({
            title,
            category,
            price,
            img,
          });
          localStorage.setItem("products", JSON.stringify(products));
          displayProducts(products);
        } catch (err) {
          alert(err);
        }
      }
      

// DELETE
// function deleteProduct(position) {
//   let confirmation = confirm(
//     "Are you sure you want to delete the selected product?"
//   );

//   if (confirmation) {
//     products.splice(position, 1);
//     localStorage.setItem("products", JSON.stringify(products));
//     displayProducts(products);
//   }
// }



// UPDATE
// function updateProduct(position){
//     let img = document.querySelector(`#imgEdit${position}`).value;
//     let title = document.querySelector(`#titleEdit${position}`).value;
//     let category = document.querySelector(`#categoryEdit${position}`).value;
//     let price = document.querySelector(`#priceEdit${position}`).value;
//     try {
//           if (!title || !price || !img) throw new Error("Please fill in all fields");
//           products[position] = {
//             title,
//             category,
//             price,
//             img,
//           };
//           localStorage.setItem("products", JSON.stringify(products));
//           displayProducts(products);
//         } catch (err) {
//           alert(err);
//         }
//       }


function addToCart(position){
    let qty = document.querySelector(`#quantity${position}`).value;
    let added = false;

    cart.forEach((product) => {
        if(product.title == products[position].title){
            alert(`You have added ${qty}  ${products[position].title} to the cart`);
            product.qty = parseInt(product.qty) + parseInt(qty);
            added = true;
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    });
    if(!added){
        alert(`You have added ${qty}  ${products[position].title} to the cart`);
        cart.push({ ...products[position], qty});
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart))
    }
   showcart(cart);
}

function categorySort(){
    let category = document.querySelector("#categorySort").value;

    if(category == "All"){
        displayProducts(products);
        return;
    }

    let fltrdCat = products.filter((product => {
        return product.category == category;
    }));

    displayProducts(fltrdCat);
}

function priceSort() {
    let direction = document.querySelector("#priceSort").value;
  
    let sortedProducts = products.sort((a, b) => a.price - b.price);
  
    console.log(sortedProducts);
  
    if (direction == "Descending") sortedProducts.reverse();
    displayProducts(sortedProducts);
  }

  function sortName() {
    let direction = document.querySelector("#sortName").value;
  
    let sortedProducts = products.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    if (direction == "Descending") sortedProducts.reverse();
    console.log(sortedProducts);
    displayProducts(products);
  }

  displayProducts(products);
let productSearch = document.querySelector('[data-search-product]');
productSearch.addEventListener('input', () => {
    try {
        let searchItem = products.filter(product => {
            return product.title.toLowerCase().includes(productSearch.value.toLowerCase());
        });
        displayProducts(searchItem);
    } catch (e) {
       alert('Function is under construction');
     }
});

let d = new Date();

let dt = document.getElementById('date');
dt.innerHTML = d;