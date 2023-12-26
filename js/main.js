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

    /* 추가실습 */
/*
const timg = document.querySelector('.testimonial_img');
const ttxt = document.querySelector('.testimonial_bubble');

timg.addEventListener('click', ()=>{
    ttxt.style.color = "orangered";
})
*/

/* main_03.js 14강 내용 */

const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;
const top_buttton = document.querySelector('.arrow_up');

document.addEventListener('scroll', ()=> {
    if(window.scrollY > homeHeight / 2){
        top_buttton.style.opacity = 1;
    }else{
        top_buttton.style.opacity = 0;
    }
})

    /* 추가코드 1 ( 스킬 슬라이드 애니메이션) */
const skill_wrap = document.querySelector('#skills');
const skillHeight = skill_wrap.offsetHeight;
const skillbox = document.querySelector('.skills_content');

document.addEventListener('scroll', ()=>{
    if(window.scrollY > skillHeight / 2){
        skillbox.style.marginTop = 0;
        skillbox.style.opacity = 1;
    }else{
        skillbox.style.marginTop = '-300px';
        skillbox.style.opacity = 0;
    }
})

    /* 추가코드 2 ( 추천글 슬라이드 애니메이션) */
const testimonial_each1 = document.querySelector('#each_1')
document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    if(window.scrollY > 2300){
        testimonial_each1.style.marginLeft = "0px";
        testimonial_each1.style.opacity = 1;
    }else{
        testimonial_each1.style.marginLeft = '-300px';
        testimonial_each1.style.opacity = 0;
    }
})

const testimonial_each2 = document.querySelector('#each_2')
document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    if(window.scrollY > 2600){
        testimonial_each2.style.marginRight = "0px";
        testimonial_each2.style.opacity = 1;
    }else{
        testimonial_each2.style.marginRight = '-300px';
        testimonial_each2.style.opacity = 0;
    }
})


const testimonial_each3 = document.querySelector('#each_3')
document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    if(window.scrollY > 2900){
        testimonial_each3.style.marginLeft = "0px";
        testimonial_each3.style.opacity = 1;
    }else{
        testimonial_each3.style.marginLeft = '-300px';
        testimonial_each3.style.opacity = 0;
    }
})



