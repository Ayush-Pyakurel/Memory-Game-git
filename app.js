const arrCards = [
  {
    name: 'Cheeseburger',
    img: 'img/cheeseburger.png',
  },
  {
    name: 'Fries',
    img: 'img/fries.png',
  },
  {
    name: 'Hotdog.png',
    img: 'img/hotdog.png',
  },
  {
    name: 'Ice-cream',
    img: 'img/ice-cream.png',
  },
  {
    name: 'MilkShake',
    img: 'img/milkshake.png',
  },
  {
    name: 'Pizza',
    img: 'img/pizza.png',
  },
  {
    name: 'Cheeseburger',
    img: 'img/cheeseburger.png',
  },
  {
    name: 'Fries',
    img: 'img/fries.png',
  },
  {
    name: 'Hotdog.png',
    img: 'img/hotdog.png',
  },
  {
    name: 'Ice-cream',
    img: 'img/ice-cream.png',
  },
  {
    name: 'MilkShake',
    img: 'img/milkshake.png',
  },
  {
    name: 'Pizza',
    img: 'img/pizza.png',
  },
];

arrCards.sort(() => Math.random() - 0.5);
console.log(arrCards);

const displayGrid = document.getElementById('grid');
const arrChoosenName = [];
const arrChoosenId = [];

const createBoard = () => {
  for (let i = 0; i < arrCards.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'img/blank.png');
    card.setAttribute('id', i);
    card.addEventListener('click', flipCard);
    displayGrid.appendChild(card);
  }
};

createBoard();

function flipCard() {
  const cardId = this.getAttribute('id');
  arrChoosenName.push(arrCards[cardId].name);
  console.log(arrChoosenName);
  arrChoosenId.push(cardId);
  this.setAttribute('src', arrCards[cardId].img);

  //const arrCardId = this.getAtrribute('id');

  console.log(cardId);
}
