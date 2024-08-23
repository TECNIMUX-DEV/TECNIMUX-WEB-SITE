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
    document.documentElement.style.setProperty('--bg-color', 'background-image: linear-gradient(to top, #ffffff, #cccccc;');
    document.documentElement.style.setProperty('--color-text', '#000');
    typeMode.innerHTML = 'Modo claro';
    changeImgs()
} else {
    dark.style.display = 'none';
    light.style.display = 'block';
    document.documentElement.style.setProperty('--bg-color', 'linear-gradient(45deg, #050505, #141414)');
    document.documentElement.style.setProperty('--color-text', '#fff');
    typeMode.innerHTML = 'Modo oscuro';
    changeImgsOringinals()
}
stateToggle = !stateToggle;
});

// Active dual mode settings bigger
const putModeLight = document.getElementById('put-mode-light');
const iconsThemeBigger = document.getElementById('icons-theme-bigger');
const stateMode = document.getElementById('state-mode');
const stateModeImg = document.getElementById('state-mode-img');
const desplegarDualMode = document.getElementById('desplegar-dual-mode');
const btnDesplegar = document.getElementById('btn-desplegar');

let stateToggleBtnDesplegar = true;
desplegarDualMode.addEventListener('click', () => {
    if(stateToggleBtnDesplegar) {
        putModeLight.style.display = 'block';
        btnDesplegar.classList.toggle('rotate-desplegar');
    } else {
        putModeLight.style.display = 'none';
        btnDesplegar.classList.toggle('rotate-desplegar');

    }
    stateToggleBtnDesplegar = !stateToggleBtnDesplegar;
});

    let stateToggleTwo = true;
putModeLight.addEventListener('click', () => {
if(stateToggleTwo) {
    document.documentElement.style.setProperty('--bg-color', 'linear-gradient(45deg, #6b6b6b, #a5a5a5, #000000)');
    document.documentElement.style.setProperty('--color-text', '#000');
    iconsThemeBigger.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eyeglass-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 4h-2l-3 10v2.5" /><path d="M16 4h2l3 10v2.5" /><path d="M10 16l4 0" /><path d="M17.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" /><path d="M6.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" /></svg>';
    stateMode.innerHTML = 'Gafas puestas';
    // containerSettings.innerHTML = 'Modo Claro';
    stateModeImg.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>';
    // changeImgs()
} else {
    document.documentElement.style.setProperty('--bg-color', 'linear-gradient(45deg, #050505, #141414, #000)');
    document.documentElement.style.setProperty('--color-text', '#fff');
    iconsThemeBigger.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eyeglass-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.536 5.546l-2.536 8.454" /><path d="M16 4h2l3 10" /><path d="M10 16h4" /><path d="M19.426 19.423a3.5 3.5 0 0 1 -5.426 -2.923v-2.5m4 0h3v2.5c0 .157 -.01 .312 -.03 .463" /><path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" /><path d="M3 3l18 18" /></svg>';
    stateMode.innerHTML = 'Gafas retiradas';
    // containerSettings.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>';
    stateModeImg.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>';
    // changeImgsOringinals()
}
stateToggleTwo = !stateToggleTwo;
});




// Changes images services
// const imgServGallery = document.getElementById('img-serv-gallery');
// const imgServHigh = document.getElementById('img-serv-high');
// const imgServSrc = document.getElementById('img-serv-src');
// function changeImgs() {
//     imgServGallery.src = '/test-icons/black/icons8-pincel-100-b.png';
//     imgServHigh.src = '/test-icons/black/icons8-billetera-100.png';
//     imgServSrc.src = '/test-icons/black/icons8-youtube-100-b.png';
// }
// function changeImgsOringinals() {
//     imgServGallery.src = '/test-icons/icons8-pincel-100.png';
//     imgServHigh.src = '/test-icons/icons8-billetera-100.png';
//     imgServSrc.src = '/test-icons/icons8-youtube-100.png';
// }

// Add tab for search
// const btnSearch = document.getElementById('btn-search');
// const tabSeach = document.getElementById('tab-search');
// const searchNav = document.getElementById('search-nav');
// const iconSearch = document.getElementById('icon-search');
// searchNav.addEventListener('click', () => {
//     tabSeach.style.display = 'inline-flex';
//     btnSearch.style.display = 'inline-flex';
//     iconSearch.style.display = 'none';
//     tabSeach.focus();
// });
// iconSearch.addEventListener('mouseleave', () => {
//     tabSeach.style.display = 'none';
// });

// Show all settings
const btnSettings = document.getElementById('btn-settings');
const containerSettings = document.getElementById('container-settings');
const filterOpenSettings = document.getElementById('filter-open-settings');

btnSettings.addEventListener('click', () => {
    containerSettings.classList.toggle('open-settings');
    filterOpenSettings.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

filterOpenSettings.addEventListener('click', () => {
    containerSettings.classList.toggle('open-settings');
    filterOpenSettings.style.display = 'none'
    document.body.style.overflow = 'auto';
})

// loading
const loading = document.getElementById('loading');
document.addEventListener('DOMContentLoaded', () => {
document.body.style.overflow = 'hidden';
    setTimeout(() => {
        loading.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 1000);
});



