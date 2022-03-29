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
const displayResult = document.getElementById('result');

let arrChoosenName = [];
let arrChoosenId = [];
let cardsWon = [];

const createBoard = () => {
  for (let i = 0; i < arrCards.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'img/blank.png');
    card.setAttribute('id', i);
    card.addEventListener('click', flipCard);
    displayGrid.appendChild(card);
  }
};
function checkMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = arrChoosenId[0];
  const optionTwoId = arrChoosenId[1];

  if (arrChoosenId[0] == arrChoosenId[1]) {
    cards[optionOneId].setAttribute('src', 'img/blank.png');
    cards[optionTwoId].setAttribute('src', 'img/blank.png');
    alert('You have clicked the same card twice!');
  } else if (arrChoosenName[0] === arrChoosenName[1]) {
    alert('You found the match!!');
    cards[optionOneId].setAttribute('src', 'img/white.png');
    cards[optionTwoId].setAttribute('src', 'img/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(arrChoosenName);
    console.log(cardsWon);
  } else {
    cards[optionOneId].setAttribute('src', 'img/blank.png');
    cards[optionTwoId].setAttribute('src', 'img/blank.png');
    alert('Try Again!');
  }

  displayResult.textContent = cardsWon.length;
  if (cardsWon.length === arrCards.length / 2) {
    displayResult.textContent =
      'Congratulation you have matched all the cards!!';
  }

  arrChoosenId = [];
  arrChoosenName = [];
}

function flipCard() {
  const cardId = this.getAttribute('id');
  arrChoosenName.push(arrCards[cardId].name);

  console.log(arrChoosenName);
  arrChoosenId.push(cardId);
  console.log(arrChoosenId);
  this.setAttribute('src', arrCards[cardId].img);
  if (arrChoosenName.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

createBoard();
