// loading pg 
window.onload = () => {
    document.getElementById('loadBg').style.display = 'none';
    document.getElementById('disSec').style.display = 'block';
  };



let d = new Date();

let dt = document.getElementById('date');
dt.innerHTML = d;



function CreateItem(id, image, name, price, category, description, quantity){
    this.id = id
    this.image = image
    this.name = name
    this.price = price
    this.category = category
    this.description = description
    this.quantity = quantity
}

let prod1 = new CreateItem(1, 'https://i.postimg.cc/BnvGvNYc/Group-8.png', 'Rare Blush', 400, 'Cosmetic Product', 'Elevate your makeup look with this stunning, richly pigmented blush that adds a touch of silk color to your cheeks. Rare Beauty, founded by renowned artist Selena Gomez, brings you this unique shade crafted to complement a variety of skin tones.', 1)

let prod2 = new CreateItem(2, 'https://i.postimg.cc/43t249gQ/Makeup-1.png', 'Red Dior Lipstick', 300, 'Cosmetic Product', 'Dior Lipstick Red is a bold statement shade that exerts confidence and glamour. With its vibrant, classic red colour, it instantly elevates any look. Indulge in the velvety smooth application of Diors lipstick formula, which glides effortlessly onto the lips.', 1)

let prod3 = new CreateItem(3, 'https://i.postimg.cc/PJfSMV8S/Light-Reflecting-Advanced-Skincare-Foundation-NARS-Sephora-1.png', 'NARS foundation', 200, 'Cosmetic Product','Indulge in the luxurious formulas crafted with skin-loving ingredients that nourish and enhance your natural beauty. From silk to full coverage, each foundation seamlessly blends into the skin, blurring imperfections and creating a smooth, flawless canvas.',1)

let prod4 = new CreateItem(4, 'https://i.postimg.cc/WzPBPcfS/Solid-Padded-Headband-1.png', 'Red Headband', 100, 'Tool','Crafted with comfort and convenience in mind, features a stretchy design that provides a comfortable fit.', 1)

let prod5 = new CreateItem(5, 'https://i.postimg.cc/MpGhwDdk/Chanel-Makeup-Brushes-New-Design-The-Beauty-Look-Book-1.png', 'Chanel Brushes', 350, 'Cosmetic Product', 'These durable brushes come in a set of 10. Feels like you applying your makeup with silk. Easy to clean and looks luxurious', 1 )

let prod6 = new CreateItem(6, 'https://i.postimg.cc/7ZQjZ2W5/download-1-1.png', 'Beauty Blender', 50, 'Tool', 'Extra bouncy which aids in a smooth finish. Easy to clean and durable. Non stick tool that transfers all product on skin', 1) 
// let prod4 = new CreateItem(4, 'https://i.postimg.cc/WzPBPcfS/Solid-Padded-Headband-1.png', 'Red Headband', 100, 'Cosmetic Product','Crafted with comfort and convenience in mind, features a stretchy design that provides a comfortable fit.', 1)

// let prod5 = new CreateItem(5, 'https://i.postimg.cc/MpGhwDdk/Chanel-Makeup-Brushes-New-Design-The-Beauty-Look-Book-1.png', 'Chanel Brushes', 350, 'Tool', 'These durable brushes come in a set of 10. Feels like you applying your makeup with silk. Easy to clean and looks luxurious', 1 )

// let prod6 = new CreateItem(6, 'https://i.postimg.cc/7ZQjZ2W5/download-1-1.png', 'Beauty Blender', 50, 'Tool', 'Extra bouncy which aids in a smooth finish. Easy to clean and durable. Non stick tool that transfers all product on skin', 1) 

let items = [prod1, prod2, prod3, prod4, prod5, prod6]

// localStorage.setItem('items', JSON.stringify(items))

let place = document.getElementById('prodMg')


// param-placeholderForArray added there to be in place of items
function displayProducts(placeholderForArray){
    place.innerHTML = ''
    placeholderForArray.forEach(item =>{
    place.innerHTML += `
   <div class="card" style="width: 18rem;" id="products">
                <img src="${item.image}" class="card-img-top" alt="blush">
                <div class="card-body">
                    <h5 class="card-title" >${item.name}</h5>
                    <p value="400">R${item.price}</p>

                    
                    <div class="d-flex">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn" id="modalBtn" data-bs-toggle="modal"
                        data-bs-target="#exampleModal${item.id}">
                        Description
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Description</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p class="card-text"> ${item.description}.</p>
                                   
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary" id="btnP">
                            <h1 id="butc" value='${item.id}'>ADD ITEM</h1>
                        </a>
                    </div>
                </div>


    `
})}
displayProducts(items)





// localStorage.setItem('items', JSON.stringify([...items,...items1]))
localStorage.setItem('items', JSON.stringify(items))



// sort btn
let category = document.querySelector('select')

category.addEventListener('click', (event)=>{
   console.log(event.target.value);
   if(event.target.value == 'none') {
    displayProducts(items)
    return
   }
let filtered = items.filter(item => item.category == event.target.value)
   displayProducts(filtered)

});

// price range sort
let price = document.getElementById('pLinkJs')

items.sort(function(a, b) {
    return a.price - b.price;
  });

price.addEventListener('click', function() {
    items.sort(function(a, b) {
      return a.price - b.price;
    });
    displayItems(); 
  });
  
  function displayItems() {
    items.forEach(function(item) {
      displayProducts(items)
    });
    place.innerHTML = html;
  }

//   alphabetical
  items.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  let alphab = document.getElementById('aLinkJs')

  alphab.addEventListener('click', function() {
    items.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    displayItems(); 
  });
  
  function displayItems() {
    items.forEach(function(item) {
      displayProducts(items)
    });
    place.innerHTML = html;
  }

// search bar
displayProducts(items);
let productSearch = document.querySelector('[data-search-product]');
productSearch.addEventListener('input', () => {
    try {
        let searchItem = items.filter(item => {
            return item.name.toLowerCase().includes(productSearch.value.toLowerCase());
        });
        displayProducts(searchItem);
    } catch (e) {
       alert('Function is under construction');
     }
});


// to store items in checkout.js
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
function addToCart(items) {
    try {
        cart.push(items);
        localStorage.setItem('checkout', JSON.stringify(cart));
    } catch (e) {
        alert('The Checkout is under construction');
    }
}

let purchasedItems = [];

// to intial buttons to effect on checkout pg
let purchasedButton = document.querySelectorAll('#butc')

function addToCart(id) {
    // looking for objs id that is equal to the id that has been clicked 
    let item = items.filter(item => item.id== id)
    purchasedItems.push(item)
    localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems))
}




purchasedButton.forEach(button=>{
    button.addEventListener('click', (event)=>{
    addToCart(event.target.value);
        
})
})
