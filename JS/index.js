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
    var resizableDiv = document.getElementById("socialNetworks-icons");
    var images = resizableDiv.querySelectorAll("img");

    window.addEventListener("scroll", function() {
        var maxHeight = 90; // Altura inicial en px
        var minHeight = 65;  // Altura mínima en px
        var maxImageHeight = 22; // Altura inicial de las imágenes en px
        var minImageHeight = 20; // Altura mínima de las imágenes en px
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






