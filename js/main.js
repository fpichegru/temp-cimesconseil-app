const toggleMenuBtn = document.querySelector("#menu-toggler");
const toggleMenuImg = document.querySelector("#menu-toggler img");
const mainNavList = document.querySelector("#main-navlist");
const menuLinks = document.querySelectorAll("#main-navlist a");

[toggleMenuBtn, ...menuLinks].forEach(element => element.addEventListener("click", toggleNav) )

function toggleNav(){
    if(mainNavList.classList.contains("hidden")){
        mainNavList.classList.remove("hidden")
        toggleMenuImg.setAttribute("src","../images/hero/cross.svg")
        toggleMenuBtn.setAttribute("aria-expanded", "true")
    } else {
         mainNavList.classList.add("hidden");
         toggleMenuImg.setAttribute("src", "../images/hero/hamburger-menu.svg");
         toggleMenuBtn.setAttribute("aria-expanded", "false");
    }
}