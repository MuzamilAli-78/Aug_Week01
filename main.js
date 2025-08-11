let currentIndex = 0;
const cards = document.querySelectorAll('.tile');

function showCard(value){
    cards.forEach( (card, i) => {
        card.classList.toggle('active', i === value);
    } );
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    // displayCard(currentIndex);
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
}

let isMobileNavOpen = false;
const rightBars = document.querySelector('#right-bars');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');
 
function initMobileNavigation() {
    rightBars.addEventListener('click', toggleMobileNav);
   
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });
}
 
function toggleMobileNav() {
    console.log('Before toggle:', isMobileNavOpen);
    isMobileNavOpen = !isMobileNavOpen;
    console.log('After toggle:', isMobileNavOpen);
   
    if (isMobileNavOpen) {
        mobileNav.style.display = 'flex';
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.body.style.overflowY = 'hidden';
    } else {
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }
}
function closeMobileNav() {
    isMobileNavOpen = false;
    mobileNav.style.display = 'none';
    document.body.style.overflowY = 'auto';
}
 
initMobileNavigation();


fetch('./data.json')
        .then(res=> res.json())
        .then(data=> displayCard(data))
       

function displayCard(data){ 
    const container = document.getElementById('#project-tiles');
    data.map(value => {
        const card = document.createElement('div');
        card.classList.add('tile', 'active');
        card.innerHTML = `
            <h3 class="project-heading">${value.project_title}</h3>
            <img class="project-img imageReveal" src="${value.img_src}" alt="${value.img_alt}" />
            <p class="project-info fadeUp">${value.project_info}</p>
            <a href="${value.project_link}" class="project-site-btn">${value.project_btn}</a>
        `
        console.log(card,"card-data");

        container.append(card);
    

    });
 

}
