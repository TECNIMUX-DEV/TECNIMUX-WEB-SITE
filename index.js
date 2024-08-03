// Show and hidden menu responsive
let hiddenList = document.getElementById('hidden-list');
let btnOpen = document.getElementById('btn-open').addEventListener('click', () => {
    hiddenList.style.display = 'block';
    document.body.style.overflowY = 'hidden';
    hiddenList.classList.add('over-flow');
});

let btnClose = document.getElementById('btn-close').addEventListener('click', () => {
    hiddenList.style.display = 'none';
    document.body.style.overflowY = 'auto';
        dual.style.display = 'none';
});
// let navHidden = document.getElementById('nav-hidden');
// navHidden.addEventListener('click', () => {
//     hiddenList.style.display = 'none';
//     document.body.style.overflowY = 'auto';
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

// Remove tab of navegation when scrolling
let containerOpenNav = document.getElementById('container-open-nav');
window.addEventListener('scroll', () => {

if(window.scrollY > 0) {
    containerOpenNav.style.display = 'none';
    containerOpenNav.classList.add('hidde');
} else if(window.scrollY < 100) {
    containerOpenNav.style.display = 'flex';
    containerOpenNav.classList.add('show-nav-bar');
}

else{
    containerOpenNav.style.display = 'flex';
    containerOpenNav.classList.add('show-nav-bar');
}
});


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

// Dual mode
let dual = document.getElementById('dual');
let theme = document.getElementById('theme').addEventListener('click', () => {
    dual.style.display = 'block'
});
let typeMode = document.getElementById('type-mode');
let dark = document.getElementById('dark');
let light = document.getElementById('light');

let stateToggle = true;
document.getElementById('dual-mode').addEventListener('click', () => {
if(stateToggle) {
    lightt();
} else {
    darkk();
}
stateToggle = !stateToggle;
});
function lightt() {
    dark.style.display = 'block';
    light.style.display = 'none';
    document.body.style.backgroundColor = '#fff';
    typeMode.innerHTML = 'Modo claro';
};
function darkk() {
    dark.style.display = 'none';
    light.style.display = 'block';
    document.body.style.backgroundColor = '#000'; 
    typeMode.innerHTML = 'Modo oscuro';
};






