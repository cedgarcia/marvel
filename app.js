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

// GALLERY SLIDER
const SLIDETIME = 350;//ms
const pageNumber = document.querySelector('#page')
const prevBtn = document.querySelector('#prev-btn');//Button var
const nextBtn = document.querySelector('#next-btn');//Button var
const slides = [...document.querySelectorAll('.slide')];//Slider var

let clickable = true;
let active = null;
let newActive = null;

nextBtn.addEventListener('click', () =>{
    changeSlide(true);
})
prevBtn.addEventListener('click', () =>{
    changeSlide(false);
})
function initSlider() {
    slides.forEach(slide =>
      slide.setAttribute('style', `transition: transform ${SLIDETIME}ms;
                                    animation-duration: ${SLIDETIME}ms`,),
         );}
     initSlider();

function changeSlide(forward){
    if(clickable){
        clickable = false;
        active = document.querySelector('.slide.active');
        const activeSlideIndex = slides.indexOf(active);
        var activePage = pageNumber.innerHTML;
        if(forward) {   
            // console.log('activeSlideIndex: ', activeSlideIndex);
            // console.log('allSlides.length: ', slides.length);
            // console.log('new slide: ', (activeSlideIndex + 1) % slides.length);
            console.log(slides.length-4)


            newActive = slides[(activeSlideIndex + 1) % slides.length];
            active.classList.add('slideOutLeft');
            newActive.classList.add('slideInRight', 'active');

            
            // PAGE NUMBER
            if(slide = activePage<=slides.length){
                activePage++
                pageNumber.innerHTML = activePage;
                if(activePage == (slides.length+1)){
                
                    pageNumber.innerHTML = 1
                }
            }

            }
        else{
            newActive = slides[(activeSlideIndex - 1 + slides.length) % slides.length];
            active.classList.add('slideOutRight');
            newActive.classList.add('slideInLeft', 'active');
            //PAGE NUMBER
            if(forward = activePage>1){
                activePage--
                pageNumber.innerHTML = activePage; 
            }
            else
            pageNumber.innerHTML = 5;
        }     
    }  
    // SLIDE LOOP
    slides.forEach(slide => {    
        slide.addEventListener('transitionend', e =>{
            if (slide === active && !clickable) {
                clickable = true;
                active.className = 'slide';
            }   
        });
    });  
}

function videoPlayer(ev,video){
    var i;
    const playerVid = document.getElementsByClassName('featured-video')
    const playerLink = document.getElementsByClassName('playlist')

    for(i = 0; i<playerVid.length;i++){
        playerVid[i].style.visibility="hidden";
    }
    document.getElementById(video).style.visibility="visible";
    
    for(i=0; i<playerLink.length; i++){
        playerLink[i].className=playerLink[i].className.replace('active');
    }

    // ev.currentTarget.className+='.playlist.active'

}

// RESPONSIVE SLIDER

const container = document.querySelector('.thumbnail-container');
const controls = document.querySelector('.controls');

const allBox = [...document.querySelectorAll('.item')];
const containerWidth = container.offsetWidth;

const margin = 30;
var items = 0;
var totalItems = 0;
var jumpSlideWidth = 0

responsive = [
    {breakPoint:{width:0,item:1}},
    {breakPoint:{width:500,item:2}},
    {breakPoint:{width:1000,item:4}}
]

function load(){
    for(let i=0; i<responsive.length;i++){
        if(window.innerWidth>responsive[i].breakPoint.width){
            items=responsive[i].breakPoint.item
        }
    }
    start();
}
function start(){
    var totalItemsWidth = 0
    for(let i = 0; i<allBox.length; i++){
        allBox[i].style.width=(containerWidth/items)-margin + 'px';
        allBox[i].style.margin=margin/2 +'px';
        totalItemsWidth += containerWidth/items;
        totalItems++;
    }
    container.style.width=totalItemsWidth + 'px';

    // SLIDE CONTROL NNUMBER
    const allSlides = Math.ceil(totalItems/items);
    const ul=document.createElement('ul');
        for(let i=1; i<=allSlides; i++){
            const li=document.createElement('li');
            li.id = i;
            li.innerHTML= i;
            li.setAttribute('onclick','controlSlide(this)');
            ul.appendChild(li)
            if(i==1){
                li.className='active'
            }

        }
    
        controls.appendChild(ul);
}
function controlSlide(ele){
   const ul= controls.children;
   const li =ul[0].children;
   var active;

   for(let i=0;i<li.length;i++){
    if(li[i].className=="active"){
        // find who is now active
        active=i;
        // remove active class from all 'li' elements
        li[i].className="";
    }
}
// add active class to current slide
ele.className="active";

var numb=(ele.id-1)-active;
   jumpSlideWidth=jumpSlideWidth+(containerWidth*numb);
container.style.marginLeft=-jumpSlideWidth + "px";

}

window.onload=load();




