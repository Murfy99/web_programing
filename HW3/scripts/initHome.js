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
  
  
function createShoeItem(shoe) {
    const shoeItem = document.createElement('div');
    shoeItem.className = 'shoeItem';

    const imageSrc = `src/images/item.jpg`; // Replace with actual image path

    shoeItem.innerHTML = `
        <div class="shoeItemContainer">
            <div class="shoeItemDetailContainer">
                <h3>${shoe.name}</h3>
                <p>Type: ${shoe.type}</p>
                <p>Price: $${shoe.price.toFixed(2)}</p>
                <p>Gender: ${shoe.gender}</p>
                <p>Material: ${shoe.material}</p>
                
            </div>
            <div class="shoeItemImageContainer">
                <img class="shoeImage" src="${imageSrc}" alt="${shoe.name}">
            </div>
        </div>
    `;

    return shoeItem;
}

  // Function to display shoes in rows of three
function displayShoesInRows(shoesData) {
    const shoesContainer = document.getElementById('shoesContainer');

    for (let i = 0; i < shoesData.length; i += 3) {
      const row = document.createElement('div');
      row.className = 'shoeRow';

      for (let j = i; j < i + 3 && j < shoesData.length; j++) {
        const shoe = shoesData[j];
        const shoeItem = createShoeItem(shoe);
        row.appendChild(shoeItem);
      }

      shoesContainer.appendChild(row);
    }
}

displayShoesInRows(shoesData);