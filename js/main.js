/* main_01.js 12강 내용 */ 

const header = document.querySelector('.header')
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY > headerHeight) {
        header.classList.add('header-dark');
    } else{
        header.classList.remove('header-dark');
    }
})

const box01 = document.querySelector('.about_content')

document.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY > 350) {
        box01.classList.add('open');
    }else{
        box01.classList.remove('open');
    }
})

/* main_02.js 13강 내용 */ 

const fog = document.querySelector('.home_container');
const fogHeight = fog.offsetHeight;
document.addEventListener('scroll', ()=>{
    fog.style.opacity = 1 - (window.scrollY / fogHeight);
})


const timg = document.querySelector('.testimonial_img');
const ttxt = document.querySelector('.testimonial_bubble');

timg.addEventListener('click', ()=>{
    ttxt.style.color = "orangered";
})