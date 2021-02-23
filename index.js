const buttonLeft = document.querySelector('.cards__switch_left');
const buttonRight = document.querySelector('.cards__switch_right');
const cardList = document.querySelector('.cards');
const card = cardList.children;

buttonLeft.addEventListener('click', () => {
    cardList.append(card[0]);
});

buttonRight.addEventListener('click', () => {
    cardList.prepend(card[2]);
});

