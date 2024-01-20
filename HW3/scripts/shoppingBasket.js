const shoesData = [
    {
      "name": "اسنیکر کلاسیک",
      "type": "اسنیکر",
      "price": 59.99,
      "picture_index": 0,
      "gender": "یکسان",
      "material": "کتان"
    },
    {
      "name": "کفش دویدن",
      "type": "ورزشی",
      "price": 79.99,
      "picture_index": 1,
      "gender": "مردانه",
      "material": "مش"
    },
    {
      "name": "لوفر کژوال",
      "type": "لوفر",
      "price": 49.99,
      "picture_index": 2,
      "gender": "زنانه",
      "material": "چرم"
    },
    {
      "name": "بوت پیاده‌روی",
      "type": "بوت",
      "price": 129.99,
      "picture_index": 3,
      "gender": "یکسان",
      "material": "چرم ضدآب"
    },
    {
      "name": "صندل پاشنه‌دار",
      "type": "صندل",
      "price": 19.99,
      "picture_index": 4,
      "gender": "مردانه",
      "material": "لاتکس"
    },
    {
      "name": "کفش بلند زنانه",
      "type": "کفش بلند",
      "price": 89.99,
      "picture_index": 5,
      "gender": "زنانه",
      "material": "مخمل"
    },
    {
      "name": "کفش بسکتبال",
      "type": "ورزشی",
      "price": 109.99,
      "picture_index": 6,
      "gender": "مردانه",
      "material": "سینتتیک"
    },
    {
      "name": "اسپادریل",
      "type": "صفحه",
      "price": 39.99,
      "picture_index": 7,
      "gender": "زنانه",
      "material": "کتان"
    },
    {
      "name": "بوت برفی",
      "type": "بوت",
      "price": 149.99,
      "picture_index": 8,
      "gender": "یکسان",
      "material": "نایلون عایق دار"
    },
    {
      "name": "صندل اسلاید",
      "type": "صندل",
      "price": 29.99,
      "picture_index": 9,
      "gender": "مردانه",
      "material": "فوم EVA"
    }
  ]
let totalPrice = 0
const cartData =[] 
for(const index of JSON.parse(localStorage.getItem('itemsList')) || []){
  cartData.push(shoesData[index])
  totalPrice+=shoesData[index].price
}

const totalAmountElement = document.getElementById('totalAmount');
totalAmountElement.textContent = totalPrice

function payButtonClicked() {
  alert(`Total Price: $${totalPrice}\n پرداخت با موفقیت انجام شد`);
  localStorage.setItem('itemsList', JSON.stringify([]));
  window.location.href = 'shoppingBaket.html';
}

let itemCount = 1; 

function createShoeItem(shoe) {
  const shoeItem = document.createElement('div');
  shoeItem.className = 'shoeItem';

  const imageSrc = `src/images/item.jpg`;

  shoeItem.innerHTML = `
    <div class="shoeItemContainer">
      <div class="shoeItemDetailContainer">
          <h3>${shoe.name}</h3>
          <p>Type: ${shoe.type}</p>
          <p>Price: $${shoe.price.toFixed(2)}</p>
          <p>Gender: ${shoe.gender}</p>
          <p>Material: ${shoe.material}</p>
          <button class="addButton" key="${shoe.picture_index}" onclick="deleteItem(${shoe.picture_index})">
          <i class="fas fa-plus"></i>حذف کردن 
          </button>
      </div>
      <div class="shoeItemImageContainer">
          <img class="shoeImage" src="${imageSrc}" alt="${shoe.name}">
      </div>
    </div>
  `;

  return shoeItem;
}

function dropFromLSArray(index){
  let itemsList = JSON.parse(localStorage.getItem('itemsList')) || [];
  const indexToRemove = itemsList.indexOf(index);
  if (indexToRemove !== -1) {
    itemsList.splice(indexToRemove, 1);
    localStorage.setItem('itemsList', JSON.stringify(itemsList));
  }
}


function deleteItem(index) {
  dropFromLSArray(index);
  window.location.href = 'shoppingBaket.html';
}

function displayShoesInRows(cartData) {
  const shoesContainer = document.getElementById('shoesContainer');
  
  for (let i = 0; i < cartData.length; i += 3) {
    const row = document.createElement('div');
    row.className = 'shoeRow';

    for (let j = i; j < i + 3 && j < cartData.length; j++) {
      const shoe = cartData[j];
      const shoeItem = createShoeItem(shoe);
      row.appendChild(shoeItem);
    }

    shoesContainer.appendChild(row);
  }
}

displayShoesInRows(cartData);


document.getElementById('payButton').addEventListener('click', payButtonClicked);
