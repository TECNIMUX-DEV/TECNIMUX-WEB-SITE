 // document.addEventListener('DOMContentLoaded', Function ()}): 
//  Cambio de color bottom header 
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

// Scroll animation
// Scrolling down
// Scrolling up
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
