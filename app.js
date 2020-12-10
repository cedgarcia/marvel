// COLLAPSE(Mobile - BurgerNav)
const burger = document.querySelector('.burger');
const collapseNav = document.querySelector('.nav__list');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    collapseNav.classList.toggle('visible');

})

// ON SCROLL(Nav Animation)
const logo = document.querySelector('.logo')
const nav = document.querySelector('.main-nav')

window.addEventListener('scroll', ()=>{
    const top = window.scrollY
    
    if(top >= nav.offsetHeight + 0){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    
    }
    if(top > logo.offsetHeight + 0){
        logo.classList.add('active')
    }
    else{
        logo.classList.remove('active')
    
    }
})

// HERO(Desktop - Play/Pause)
const vid = document.querySelector('#hero-vid');
const playBtn = document.querySelector('.vid-btn');

playBtn.addEventListener('click', ()=>{
    if(vid.paused){
        vid.play();
        playBtn.innerHTML = '<i class="fa fa-pause fa-xs"></i>'
    }
    else{
        vid.pause();
        playBtn.innerHTML = '<i class="fa fa-play fa-xs"></i>'
    } 
    // else{
    //     vid.pause();
    //     playBtn.innerHTML = '&#x23F5'
    // }  

})


