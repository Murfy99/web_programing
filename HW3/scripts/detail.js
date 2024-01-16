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



const mainImage = document.getElementById('mainImage');
const mainImageDetails = document.querySelector('.main-image-details');
const slider = document.getElementById('slider');

// Function to update the main image and details
function updateMainImage(index) {
    const selectedShoe = shoesData[index];
    mainImage.src = `src/images/item.jpg`; // Update the path accordingly
    mainImageDetails.innerHTML = `
        <h3>${selectedShoe.name}</h3>
        <p>Type: ${selectedShoe.type}</p>
        <p>Price: $${selectedShoe.price}</p>
        <p>Gender: ${selectedShoe.gender}</p>
        <p>Material: ${selectedShoe.material}</p>
    `;

    // Remove 'selected' class from all cards
    document.querySelectorAll('.shoeItem').forEach(card => {
        card.classList.remove('selected');
    });

    // Add 'selected' class to the clicked card
    const selectedCard = document.getElementById(`shoeItem-${index}`);
    selectedCard.classList.add('selected');
}

// Function to create shoe cards in the slider
function createShoeCards() {
    shoesData.forEach((shoe, index) => {
        const card = document.createElement('div');
        card.classList.add('shoeItem');
        card.setAttribute('id', `shoeItem-${index}`);
        card.innerHTML = `
            <img src="src/images/item.jpg" alt="${shoe.name}">
            <div>
                <h4>${shoe.name}</h4>
                <p>Type: ${shoe.type}</p>
                <p>Price: $${shoe.price}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            updateMainImage(index);
        });
        slider.appendChild(card);
    });
}

// Initialize the page
createShoeCards();
updateMainImage(0); // Display the details for the first shoe initially