// storage from product
let cart = JSON.parse(localStorage.getItem('checkout')) || [];

// loading pg 
window.onload = () => {
    document.getElementById('loadBg').style.display = 'none';
    document.getElementById('disSec').style.display = 'block';
  };

  