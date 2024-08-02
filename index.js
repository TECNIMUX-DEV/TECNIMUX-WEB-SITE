// Show menu responsive
let hiddenList = document.getElementById('hidden-list');
let btnOpen = document.getElementById('btn-open').addEventListener('click', () => {
    hiddenList.style.display = 'block';
});




// Show icon
// document.addEventListener (".search-i").addEventListener("click", funtion () {

// var icon = document.getElementById("arrow-right");
// if (icon.childElementCount === 0) {
//     var aggIcon = document.createElement("i");
//     aggIcon.className = "bi bi-arrow-90deg-right";
//     iconContainer.appendchild(aggICon);
// }
// else {
//     alert('ok');
// }
// });

// Bottom header color Nav
window.addEventListener('scroll',function() {
    let bottomWhite = document.getElementsByClassName('bottomWhite');
    let header01 = document.getElementById('header01');
    if (window.scrollY > 0) {
        header01.classList.add('bottomWhite');
    } else{
        header01.classList.remove('bottomWhite');
        }
        });

// Dual mode color
function modesTwo(){
    const body = document.body;
    body.classList.toggle("clear-mode");
}

// Carrusel 
let slideIndex = 1;

showSlide(slideIndex);

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Animation once
// document.addEventListener('DOMContentLoaded', () => {
//     const section = document.getElementById('sec-00');

//     const handleMouseOver = () => {
//         if (!section.classList.contains('animated')) {
//             section.classList.add('animated');
//             section.addEventListener('animationend', () => {
//                 section.classList.remove('animated');
//                 section.classList.add('animation-done');
//                 // section.style.transform = 'opacity(1)'; 
//                 section.removeEventListener('mouseover', handleMouseOver);
//             }, { once: true });
//         }
//     };

//     section.addEventListener('mouseover', handleMouseOver);
// });

// Change icon dual mode
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('iconDualMode-01');
    // const imageTwo = document.getElementById('iconDualMode-02');

    image.addEventListener('click', () => {
        if (image.src.includes('/icons/dark-clear-mode/dark_mode_night_moon_icon.png')) {
            image.src = '/icons/dark-clear-mode/icons8-summer-50.png';
        } else {
            image.src = '/icons/dark-clear-mode/dark_mode_night_moon_icon.png';
        }
    });
});





