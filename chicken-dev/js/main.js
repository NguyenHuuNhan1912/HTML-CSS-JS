const barIconNode = document.querySelector('.bars-icon');
const menuOther = document.querySelector('.nav-header-other');
const closeMenuOther = document.querySelector('.nav-close');
const overlayNode = document.querySelector('.overlay');
const bodyNode = document.querySelector('.body');


overlayNode.addEventListener('click',()=>{
    menuOther.classList.remove('show-menu-other');
    overlayNode.classList.remove('overlay--show');
})  

barIconNode.addEventListener('click',()=>{
    menuOther.classList.toggle('show-menu-other');
    overlayNode.classList.toggle('overlay--show');
})

closeMenuOther.addEventListener('click',()=>{
    menuOther.classList.toggle('show-menu-other');
    overlayNode.classList.toggle('overlay--show');
})


