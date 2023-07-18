/**
 * add event listener on multiple elements
 */

const addEventOnElements = function ( elements, eventType, callback){
    for ( let i = 0 , len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType,callback);
    }
}


// Navbar toggle for small displays

const navbar = document.querySelector("[data-navbar]");
const navTogglers  = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");

}

addEventOnElements(navTogglers,"click",toggleNavbar);

window.addEventListener("scroll",function () {
    if(navbar.classList.contains("active")){
        toggleNavbar();
    }
})

/**
 * HEADER
 * active header when window scroll down to 100px
 */
 const header = document.querySelector("[data-header]");
 window.addEventListener("scroll",function (){
    if (this.window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active")
    }
 })



/* 
** Scroll Reaveal
*/

const reavealItems = document.querySelectorAll("[data-reveal]");
const revealDelayItems = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
    for (let i = 0, len = reavealItems.length; i < len ; i++){
        if (reavealItems[i].getBoundingClientRect().top < window.innerHeight / 1.2){
            reavealItems[i].classList.add("revealed");
        }
    }
}

for (let i = 0, len = revealDelayItems.length; i < len ; i++){
    revealDelayItems[i].style.transitionDelay = revealDelayItems[i].dataset.revealDelay;
}

window.addEventListener("scroll",reveal);
window.addEventListener("load", reveal);