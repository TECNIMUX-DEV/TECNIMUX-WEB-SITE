document.addEventListener('DOMContentLoaded', () => {

// Menu
const menuMain = document.getElementById('menu-main');
const btnMenu = document.getElementById('burger');

let stateToggle = true;
btnMenu.addEventListener('click', () => {
    if(stateToggle) {
        menuMain.style.display = "block";
        btnMenu.style.position = "fixed";
    } else {
        menuMain.style.display = "none";
        btnMenu.style.position = "fixed";
    }
stateToggle =! stateToggle;
})



// Close Somos TX Home
const who = document.getElementById('who');
const somosTX = document.getElementById('somos-tx');
const btnCloseSomostx = document.getElementById('btn-close-somostx');

btnCloseSomostx.addEventListener('click', () => {
somosTX.style.display = "none";
})

who.addEventListener('click', () => {
    somosTX.style.display = "flex";
    })


// Add header color when scrolling
let lastScrollY = window.scrollY;
const header01 = document.querySelector('header');

 window.addEventListener('scroll', () => {
     if (window.scrollY > lastScrollY) {
         header01.classList.add("header-hidden")
     } else if (lastScrollY <= 100){
        header01.classList.remove("header-hidden")
         }
         lastScrollY = window.scrollY;
         });

});


// Button back to top
let backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 150 ) {
     backToTop.style.display= "block";
  } else {
     backToTop.style.display= "none";
      }
      });
