import mobileNavigation from "./utility.js";
mobileNavigation();


let currentIndex = 0;
const cards = document.querySelectorAll('.tile');

function showCard(value){
    cards.forEach( (card, i) => {
        card.classList.toggle('active', i === value);
    } );
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
}




