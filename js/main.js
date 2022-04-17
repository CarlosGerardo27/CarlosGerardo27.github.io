'use strict'



/* DOM Elements */

const menu = document.getElementById('menu_icon');
const closeMenu = document.getElementById('close_icon');
const menucontainer = document.getElementById('menu__container');
const cardImage = document.getElementsByClassName('card__image');
const descriptionbg = document.getElementsByClassName('decription__background');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('div.navbar__menu > a');
const projectCard = document.querySelectorAll('.project__card')
const spanish = document.querySelectorAll('.esp')
const english = document.querySelectorAll('.eng')
const usaFlag = document.getElementById('unitedStates')
const mexico = document.getElementById('mexico')

const sticky = navbar.offsetTop;


/* functions */

const fixedNav = ()=>{
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");

      } else {
        navbar.classList.remove("sticky");
      }
}


const toggleMenu = () =>{
    menu.addEventListener('click', ()=>{
        closeMenu.style.display = 'block';
        menu.style.display = 'none'
        menucontainer.style.display = 'flex'
    })

    closeMenu.addEventListener('click',()=>{
        menu.style.display = 'block'
        closeMenu.style.display = 'none'
        menucontainer.style.display = 'none'
    }
    )

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 850){
            menucontainer.style.display = 'flex'
        } else{
            menucontainer.style.display = 'none'
        }
    })
}

window.addEventListener('resize', ()=>{
    if(window.innerWidth >850 ){
        menu.style.display = 'none';
        closeMenu.style.display = 'none';

    }else if(window.innerWidth <= 850) {
        menu.style.display = 'block';
        for(let i = 0 ; i < navLinks.length ; i++){
            navLinks[i].addEventListener('click',()=>[
                closeMenu.click()
            ])
        }
        usaFlag.addEventListener('click',()=>{
            closeMenu.click()
        })
        mexico.addEventListener('click',()=>{
            closeMenu.click()
        })
    }
})





for(let i= 0; i < cardImage.length; i++){
    cardImage[i].addEventListener('click',()=>{
        let card = cardImage[i].firstChild.nextSibling;
        card.style.display = 'flex'
        card.style.display = 'flex'
    });
    cardImage[i].addEventListener('mouseover',()=>{
        let card = cardImage[i].firstChild.nextSibling;
        card.style.display = 'flex'
    });
    cardImage[i].addEventListener('mouseout',()=>{
        let card = cardImage[i].firstChild.nextSibling;
        card.style.display = 'none'
    });
}



const language = ()=>{
    for(let i = 0; i< spanish.length ; i++){
        spanish[i].classList.toggle('hide')
    }

    for(let i = 0; i< english.length ; i++){
        english[i].classList.toggle('hide')
    }
}

usaFlag.addEventListener('click',()=>{
    language()
})

mexico.addEventListener('click',()=>{
    language()
})




 
/* animation functions */




const animatedCard = ()=>{
    for(let i = 0; i < projectCard.length; i++){
        let card = {}
        card = projectCard[i];

        const observer = new IntersectionObserver(entries =>{
            card.classList.toggle('showOnScroll', entries[0].isIntersecting);
        })

        observer.observe(card)
    }
}




/* function calls */

toggleMenu()
fixedNav()
animatedCard()

