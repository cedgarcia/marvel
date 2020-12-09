// COLLAPSE
const burger = document.querySelector('.burger');
const collapseNav = document.querySelector('.nav__list')


burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    collapseNav.classList.toggle('visible');

}


)




// window.addEventListener('scroll', fixLogo)

// function fixLogo() {
//     if(window.scrollY > logo.offsetHeight + 0) {
//         logo.classList.add('active')
//     } else {
//         logo.classList.remove('active')
//     }
// } 

// window.addEventListener('scroll', fixNav)

// function fixNav() {
//     if(window.scrollY > nav.offsetHeight + 0) {
//         nav.classList.add('active')
//     } else {
//         nav.classList.remove('active')
//     }
// }


// ON SCROLL
const logo = document.querySelector('.logo')
const nav = document.querySelector('.main-nav')
window.addEventListener('scroll', ()=>{
    if(window.scrollY > nav.offsetHeight + 0){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    
    }
    if(window.scrollY > logo.offsetHeight + 0){
        logo.classList.add('active')
    }
    else{
        logo.classList.remove('active')
    
    }
})