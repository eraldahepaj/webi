[11:45 am, 17/04/2024] Elvina💞: 'use strict';
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn=document.querySelector("[data-nav-open-btn]");
const navbar=document.querySelector("[data-navbar]");
const navCloseBtn=document.querySelector("[data-nav-close-btn]");
const navLinks=document.querySelectorAll("[data-nav-link]");

const navElemArr=[navOpenBtn,navCloseBtn,overlay];
const navToggleEvent=function(elem){
    for(let i=0;i<elem.length;i++){
        elem[i].addEventListener("click",function(){
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }
}
navToggleEvent(navElemArr);
navToggleEvent(navLinks);
  

const header=document.querySelector("[data-header]");
window.addEventListener("scroll",function(){
 …
[0:15 pm, 17/04/2024] Elvina💞: https://shoesyourpath.com/wp-content/uploads/2018/09/albanie-theth-eglise-1.jpg
[1:03 pm, 17/04/2024] Elvina💞: 'use strict';
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn=document.querySelector("[data-nav-open-btn]");
const navbar=document.querySelector("[data-navbar]");
const navCloseBtn=document.querySelector("[data-nav-close-btn]");
const navLinks=document.querySelectorAll("[data-nav-link]");

const navElemArr=[navOpenBtn,navCloseBtn,overlay];
const navToggleEvent=function(elem){
    for(let i=0;i<elem.length;i++){
        elem[i].addEventListener("click",function(){
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }
}




navToggleEvent(navElemArr);
navToggleEvent(navLinks);
  

const header=document.querySelector("[data-header]");
const goTopBtn=document.querySelector("[data-go-top]");



window.addEventListener("scroll",function(){
    if(window.scrollY>=200){
        header.classList.add("active");
        goTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        goTopBtn.classList.remove("active");

    }
});