const mobileNav = () => {
    const rightBars = document.querySelector('.right-bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link')

    let isMobileNavOpen =  false;

    rightBars.addEventListener( 'click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen){            
            mobileNav.style.display = 'flex'; 
            document.body.style.overflowY = 'hidden';
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            mobileNav.style.display = 'none'; 
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener( 'click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    })
}

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

