document.addEventListener('DOMContentLoaded', () => {

// Menu
const menuMain = document.getElementById('menu-main');
const btnMenu = document.getElementById('burger');
const header = document.querySelector('header');

let stateToggle = true;
btnMenu.addEventListener('click', () => {
    if(stateToggle) {
        menuMain.style.display = "block";
        btnMenu.style.position = "fixed";
        header.style.position = "fixed";
        header.style.height = "100vh";
        document.body.style.overflowY = 'hidden';

    } else {
        menuMain.style.display = "none";
        btnMenu.style.position = "fixed";
        header.style.position = "absolute";
        header.style.height = "auto";
        document.body.style.overflowY = 'auto';
    }
stateToggle =! stateToggle;
})

// Close Somos TX Home
const who = document.getElementById('who');
const somosTX = document.getElementById('somos-tx');
const btnCloseSomostx = document.getElementById('btn-close-somostx');

btnCloseSomostx.addEventListener('click', () => {
    somosTX.style.display = "none";
    document.body.style.overflowY = 'auto';
})

who.addEventListener('click', () => {
    somosTX.style.display = "flex";
    document.body.style.overflowY = 'hidden';
    })

// Add header color when scrolling
let lastScrollY = window.scrollY;
const header01 = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header01.classList.add("header-hidden")
    } else{
       header01.classList.remove("header-hidden")
        }
        lastScrollY = window.scrollY;
        });

});

//  window.addEventListener('scroll', () => {
//      if (window.scrollY > lastScrollY) {
//          header01.classList.add("header-hidden")
//      } else if (lastScrollY <= 100){
//         header01.classList.remove("header-hidden")
//          }
//          lastScrollY = window.scrollY;
//          });

// });

// Button back to top
let backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 150 ) {
     backToTop.style.display= "block";
  } else {
     backToTop.style.display= "none";
      }
      });


// Show elements home 
const previews = document.querySelectorAll('.preview'); 
const bgDarkg = document.getElementById('bg-dark-g');
 
previews.forEach(preview => {
preview.addEventListener('click', () => {
    preview.classList.toggle('center-preview');
    bgDarkg.style.display = 'block';
    document.body.style.overflow = 'hidden';
} )


bgDarkg.addEventListener('click', () => {
    bgDarkg.style.display = 'none';
    preview.classList.remove('center-preview');
    document.body.style.overflow = 'auto';
    console.log('error');
})
})

// btn-close-Our
// let somostx = document.getElementById('somos-tx');
// let btnCloseSomostx = document.getElementById('btn-close-somostx');
// btnCloseSomostx.addEventListener('click', () => {

//     })

// Menu accessibility 
const acc = document.getElementById('acc');
const menuAcc = document.getElementById('menu-acc');
const btnCloseMenuAcc = document.getElementById('btn-close-menu-acc');

acc.addEventListener('click', () => {
    menuAcc.style.display = 'block';
})

btnCloseMenuAcc.addEventListener('click', () => {
    menuAcc.style.display = 'none';
})

// document.body.style.cursor = "url('/icons/CURSOR/CURSOR.png') 16 16, auto";
