'use strict'



/* DOM Elements */

const menu = document.getElementById('menu_icon');
const closeMenu = document.getElementById('close_icon')
const menucontainer = document.getElementById('menu__container')
const cardImage = document.getElementsByClassName('project__card')
const descriptionbg = document.getElementsByClassName('decription__background')



/* functions */



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
    })

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
    }
})


/* for(let i = 0; i < cardImage.length; i++){
    cardImage[i].addEventListener('mouseover',()=>{
        this.classList.toggle('hide')
        let card = this.nextElementSibling;
        if (card.classList.contains('hide')){
            card.classList.remove('hide')
        }else{
            card.classList.add('hide')
        }
    })
} */



toggleMenu()

