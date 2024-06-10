 /* Cambio de color bottom header 
 document.addEventListener('DOMContentLoaded', Function ()}): 
 window.addEventListener('scroll', function() {
    var header = document.getElementById('header-01');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 850) {
        header.style.boxShadow = '2px 2px 10px #64409286';
    } else {
        header.style.boxShadow = '2px 2px 10px #ffffff86';
    }
}); 

let value
if (typeof window !== 'undefined') {
  value = window.localStorage.getItem('key')
}
*/

/* Scroll animation Scrolling down Scrolling up
document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        sections.forEach((section, index) => {
            if(isElementInView(section, 0.5)) {
            section.classList.remove('section-hidden');
        } else {
            section.classList.add('section-hidden');
        }
        });
    });
    
function  isElementInView(el, percentVisible) {
let rect = el.getBoundingClientRect();
let windowHeight = window.innerHeight || document.documentElement,clientHeight;
return !(rect.bottom < 0 || rect.top - windowHeight >= percentVisible * el.clientHeight);
} 
});
 */

// Top header
document.addEventListener("DOMContentLoaded", function() {
    var resizableDiv = document.getElementById("header-01");

    window.addEventListener("scroll", function() {
        var maxHeight = 90; // Altura inicial en px
        var minHeight = 75;  // Altura mínima en px
        var scrollHeight = 30; // Ajuste proporcional de la altura
        var scrollY = window.scrollY;

        var newHeight = maxHeight - (scrollY / scrollHeight) * (maxHeight - minHeight);
        if (newHeight < minHeight) newHeight = minHeight;
        resizableDiv.style.height = newHeight + "px";

        var newImageHeight = maxImageHeight - (scrollY / scrollHeight) * (maxImageHeight - minImageHeight);
        if (newImageHeight < minImageHeight) newImageHeight = minImageHeight;
        images.forEach(function(image) {
            image.style.height = newImageHeight + "px";
        });
    });
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
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('sec-00');

    const handleMouseOver = () => {
        if (!section.classList.contains('animated')) {
            section.classList.add('animated');
            section.addEventListener('animationend', () => {
                section.classList.remove('animated');
                section.classList.add('animation-done');
                // section.style.transform = 'opacity(1)'; 
                section.removeEventListener('mouseover', handleMouseOver);
            }, { once: true });
        }
    };

    section.addEventListener('mouseover', handleMouseOver);
});





