let currentIndex = 0;
// let rangeIndex = [0,1];
const container = document.getElementById('project-tiles');


function nextCard() {
    currentIndex = (currentIndex + 1) % customData.length;
    container.removeChild(container.lastChild);
    displayCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + customData.length) % customData.length;
    container.removeChild(container.lastChild);
    displayCard(currentIndex);
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
    isMobileNavOpen = !isMobileNavOpen;
   
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

customData = []

customData = fetch('./data.json')
        .then(res=> res.json())
        .then(data=>{
            customData = data;
            displayCard(currentIndex);   
        });
   

function displayCard(index){ 
    
    const value = customData[index];
    const card = document.createElement('div');
    card.classList.add('tile', 'active');
    card.innerHTML = `
        <h3 class="project-heading">${value.project_title}</h3>
        <img class="project-img imageReveal" src="${value.img_src}" alt="${value.img_alt}" />
        <p class="project-info fadeUp">${value.project_info}</p>
        <a href="${value.project_link}" class="project-site-btn">${value.project_btn}</a>
    `
    container.append(card);

}
