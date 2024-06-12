// loading pg 
window.onload = () => {
    document.getElementById('loadBg').style.display = 'none';
    document.getElementById('disSec').style.display = 'block';
  };



let d = new Date();

let dt = document.getElementById('date');
dt.innerHTML = d;


// let searchinp = document.getElementById('inputJs')
// let searchbtn = document.getElementById('sBtnJs')
// let category = document.getElementById('cLinkJs')
// let price = document.getElementById('pLinkJs')
// let aphlabetical = document.getElementById('aLinkJs')

function CreateItem(id, image, name, price, category, description, quantity){
    this.id = id
    this.image = image
    this.name = name
    this.price = price
    this.category = category
    this.description = description
    this.quantity = quantity
}

let prod1 = new CreateItem(1, 'https://i.postimg.cc/BnvGvNYc/Group-8.png', 'Rare Blush Deep Red', 400, 'Cosmetic Product', 'Elevate your makeup look with this stunning, richly pigmented blush that adds a touch of silk color to your cheeks. Rare Beauty, founded by renowned artist Selena Gomez, brings you this unique shade crafted to complement a variety of skin tones.', 1)

let prod2 = new CreateItem(2, 'https://i.postimg.cc/43t249gQ/Makeup-1.png', 'Red Dior Lipstick', 300, 'Cosmetic Product', 'Dior Lipstick Red is a bold statement shade that exerts confidence and glamour. With its vibrant, classic red colour, it instantly elevates any look. Indulge in the velvety smooth application of Diors lipstick formula, which glides effortlessly onto the lips.', 1)

let prod3 = new CreateItem(3, 'https://i.postimg.cc/PJfSMV8S/Light-Reflecting-Advanced-Skincare-Foundation-NARS-Sephora-1.png', 'NARS foundation', 200, 'Cosmetic Product','Indulge in the luxurious formulas crafted with skin-loving ingredients that nourish and enhance your natural beauty. From silk to full coverage, each foundation seamlessly blends into the skin, blurring imperfections and creating a smooth, flawless canvas.',1)

// let prod4 = new CreateItem(4, 'https://i.postimg.cc/WzPBPcfS/Solid-Padded-Headband-1.png', 'Red Headband', 100, 'Cosmetic Product','Crafted with comfort and convenience in mind, features a stretchy design that provides a comfortable fit.', 1)

// let prod5 = new CreateItem(5, 'https://i.postimg.cc/MpGhwDdk/Chanel-Makeup-Brushes-New-Design-The-Beauty-Look-Book-1.png', 'Chanel Brushes', 350, 'Tool', 'These durable brushes come in a set of 10. Feels like you applying your makeup with silk. Easy to clean and looks luxurious', 1 )

// let prod6 = new CreateItem(6, 'https://i.postimg.cc/7ZQjZ2W5/download-1-1.png', 'Beauty Blender', 50, 'Tool', 'Extra bouncy which aids in a smooth finish. Easy to clean and durable. Non stick tool that transfers all product on skin', 1) 

let items = [prod1, prod2, prod3]

// localStorage.setItem('items', JSON.stringify(items))

let place = document.getElementById('prodMg')

items.forEach(item =>{
    place.innerHTML += `
   <div class="card" style="width: 18rem;" id="${item.category}">
                <img src="${item.image}" class="card-img-top" alt="blush">
                <div class="card-body">
                    <h5 class="card-title" >${item.name}</h5>
                    <p value="400">R${item.price}</p>

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
                        <div id="quantP">
                        <h6>Quantity:</h6>
                        <input type="number" id="mass" placeholder="Enter Quantity">
                    </div>
                    <h6>Total cost:</h6>
                    <div id="totalcost">

                    </div>
                    <div class="d-flex">
                        <a href="#" class="btn btn-primary" id="btnP">
                            <h1 id="butc" value='${item.id}'>PURCHASE</h1>
                        </a><a href="#" class="btn btn-primary" id="btnP">
                            <h1 id="butc">DELETE</h1>
                        </a>
                    </div>
                </div>


    `
})


let prod4 = new CreateItem(4, 'https://i.postimg.cc/WzPBPcfS/Solid-Padded-Headband-1.png', 'Red Headband', 100, 'Cosmetic Product','Crafted with comfort and convenience in mind, features a stretchy design that provides a comfortable fit.', 1)

let prod5 = new CreateItem(5, 'https://i.postimg.cc/MpGhwDdk/Chanel-Makeup-Brushes-New-Design-The-Beauty-Look-Book-1.png', 'Chanel Brushes', 350, 'Tool', 'These durable brushes come in a set of 10. Feels like you applying your makeup with silk. Easy to clean and looks luxurious', 1 )

let prod6 = new CreateItem(6, 'https://i.postimg.cc/7ZQjZ2W5/download-1-1.png', 'Beauty Blender', 50, 'Tool', 'Extra bouncy which aids in a smooth finish. Easy to clean and durable. Non stick tool that transfers all product on skin', 1) 

let items1 = [prod4, prod5, prod6]

localStorage.setItem('items', JSON.stringify([...items,...items1]))

let place1 = document.getElementById('prodMg1')

items1.forEach(item1 =>{
    place1.innerHTML += `
   <div class="card" style="width: 18rem;" id="${item1.category}">
                <img src="${item1.image}" class="card-img-top" alt="blush">
                <div class="card-body">
                    <h5 class="card-title" >${item1.name}</h5>
                    <p value="400">R${item1.price}</p>

                    <!-- Button trigger modal -->
                    <button type="button" class="btn" id="modalBtn" data-bs-toggle="modal"
                        data-bs-target="#exampleModal${item1.id}">
                        Description
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal${item1.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Description</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p class="card-text"> ${item1.description}.</p>
                                   
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="quantP">
                        <h6>Quantity:</h6>
                        <input type="number" id="mass" placeholder="Enter Quantity">
                    </div>
                    <h6>Total cost:</h6>
                    <div id="totalcost">

                    </div>
                    <div class="d-flex">
                        <a href="#" class="btn btn-primary" id="btnP">
                            <h1 id="butc" value='${item1.id}'>PURCHASE</h1>
                        </a><a href="#" class="btn btn-primary" id="btnP">
                            <h1 id="butc">DELETE</h1>
                        </a>
                    </div>
                </div>


    `
})

// sort btn
let category = document.getElementById('cLinkJs')

category.addEventListener('click', ()=>{
   
    items.forEach(item =>{
        if (`${item.category}` === items[item].category) {
            return item.innerHTML;
        } else {
            alert('does not exist')
        }
    })
});


let category1 = document.getElementById('cLinkJs1')

category1.addEventListener('click', ()=>{
   
    items1.forEach(item1 =>{
        if (`${item1.category}` === items[category]) {
            return item1.innerHTML;
        } else {
            alert('does not exist')
        }
    })
});