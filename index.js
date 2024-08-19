// Show and hidden menu responsive
let hiddenList = document.getElementById('hidden-list');
let btnOpen = document.getElementById('btn-open');
btnOpen.addEventListener('click', () => {
    hiddenList.style.display ='block';
    document.body.style.overflowY = 'hidden';
});

let btnClose = document.getElementById('btn-close').addEventListener('click', () => {
    hiddenList.style.display = 'none';
        dual.style.display = 'none';
        document.body.style.overflowY = 'auto';
});

const aboutItem = document.getElementById('about-item').addEventListener('click', () => {
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
let stateScroll = 0;
const containerOpenNav = document.getElementById('container-open-nav');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    if(screenWidth <= 1000) {


if(scrollTop > stateScroll) {

    containerOpenNav.style.display = 'none';
    containerOpenNav.classList.add('hidde');

} else{
    containerOpenNav.style.display = 'flex';
    containerOpenNav.classList.add('show-nav-bar');
} 
} else {
    containerOpenNav.style.display = 'none';
    containerOpenNav.classList.add('hidde'); 
}
stateScroll = scrollTop <= 0 ? 0: scrollTop; 
});


// Carrusel 
// let slideIndex = 1;

// showSlide(slideIndex);

// function nextSlide() {
//     showSlide(slideIndex += 1);
// }

// function prevSlide() {
//     showSlide(slideIndex -= 1);
// }

// function currentSlide(n) {
//     showSlide(slideIndex = n);
// }

// function showSlide(n) {
//     const slides = document.getElementsByClassName("slide");
//     const dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }

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
const btnThemes = document.getElementById('btn-themes');
let dual = document.getElementById('dual');

let stateModeDualToggle = true; 
btnThemes.addEventListener('click', () => {
    if(stateModeDualToggle) {
        dual.style.display = 'flex';
    } else {
        dual.style.display = 'none';
    }
    stateModeDualToggle = !stateModeDualToggle;
});

let typeMode = document.getElementById('type-mode');
let dark = document.getElementById('dark');
let light = document.getElementById('light');

let stateToggle = true;
let dualMode = document.getElementById('dual-mode');
dualMode.addEventListener('click', () => {
if(stateToggle) {
    dark.style.display = 'block';
    light.style.display = 'none';
    document.documentElement.style.setProperty('--bg-color', 'linear-gradient(45deg, #eeeeee, #dadada, #000)');
    document.documentElement.style.setProperty('--color-text', '#000');
    typeMode.innerHTML = 'Modo claro';
    changeImgs()
} else {
    dark.style.display = 'none';
    light.style.display = 'block';
    document.documentElement.style.setProperty('--bg-color', 'linear-gradient(45deg, #6b6b6b, #dadada, #000)');
    document.documentElement.style.setProperty('--color-text', '#fff');
    typeMode.innerHTML = 'Modo oscuro';
    changeImgsOringinals()
}
stateToggle = !stateToggle;
});



// Changes images services
const imgServGallery = document.getElementById('img-serv-gallery');
const imgServHigh = document.getElementById('img-serv-high');
const imgServSrc = document.getElementById('img-serv-src');
function changeImgs() {
    imgServGallery.src = '/test-icons/black/icons8-pincel-100-b.png';
    imgServHigh.src = '/test-icons/black/icons8-billetera-100.png';
    imgServSrc.src = '/test-icons/black/icons8-youtube-100-b.png';
}
function changeImgsOringinals() {
    imgServGallery.src = '/test-icons/icons8-pincel-100.png';
    imgServHigh.src = '/test-icons/icons8-billetera-100.png';
    imgServSrc.src = '/test-icons/icons8-youtube-100.png';
}

// Add tab for search
const btnSearch = document.getElementById('btn-search');
const tabSeach = document.getElementById('tab-search');
const searchNav = document.getElementById('search-nav');
const iconSearch = document.getElementById('icon-search');
searchNav.addEventListener('click', () => {
    tabSeach.style.display = 'inline-flex';
    btnSearch.style.display = 'inline-flex';
    iconSearch.style.display = 'none';
    tabSeach.focus();
});
// iconSearch.addEventListener('mouseleave', () => {
//     tabSeach.style.display = 'none';
// });

// Show all settings
const btnSettings = document.getElementById('btn-settings');
const containerSettings = document.getElementById('container-settings');
const filterOpenSettings = document.getElementById('filter-open-settings');

let stateSettingsToggle = true;
btnSettings.addEventListener('click', () => {
    if(stateSettingsToggle) {
        containerSettings.style.display = 'block'
        filterOpenSettings.style.display = 'block'
        document.body.style.overflow = 'hidden';
    } else {
        containerSettings.style.display = 'none';
        filterOpenSettings.style.display = 'none'
         document.body.style.overflow = 'auto';
    }
    stateSettingsToggle = !stateSettingsToggle;
});

filterOpenSettings.addEventListener('click', () => {
    containerSettings.style.display = 'none';
    filterOpenSettings.style.display = 'none'
     document.body.style.overflow = 'auto';
})



