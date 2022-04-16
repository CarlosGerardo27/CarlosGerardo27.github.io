'use strict'

/* DOM Elements */

const menu = document.getElementById('menu_icon');
const closeMenu = document.getElementById('close_icon')
const menucontainer = document.getElementById('menu__container')



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
}


window.addEventListener('resize', ()=>{
    if(window.innerWidth >850 ){
        menu.style.display = 'none'
        closeMenu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
})

toggleMenu()
