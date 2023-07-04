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