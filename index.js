document.addEventListener('DOMContentLoaded', () => {
// Show and hidden menu responsive
let hiddenList = document.getElementById('hidden-list');
// let btnOpenNavMain = document.getElementById('btn-open-nav-main');
let btnOpenNavPrimaryNav = document.getElementById('btn-open-primary-nav');
// btnOpenNavMain.addEventListener('click', () => {
//     hiddenList.style.display ='block';
//     hiddenList.style.overflowY = 'hidden';
//     guia.style.display = 'none';
//     filterGeneral.style.display = 'none';
//     containerOpenNav.style.display = 'none';
//     document.body.style.overflowY = 'hidden';
// });

btnOpenNavPrimaryNav.addEventListener('click', () => {
    hiddenList.style.display ='block';
    hiddenList.style.overflowY = 'hidden';
    filterGeneral.style.display = 'none';
    containerOpenNav.style.display = 'none';
    document.body.style.overflowY = 'hidden';
});

let btnCloseSecondNav = document.getElementById('btn-close-second-nav');
btnCloseSecondNav.addEventListener('click', () => {
    hiddenList.style.display = 'none';
    document.body.style.overflowY = 'auto';
    containerOpenNav.style.display = 'flex';
});

const aboutItem = document.getElementById('about-item').addEventListener('click', () => {
    hiddenList.style.display = 'none';
    document.body.style.overflowY = 'auto';
});
// let navHidden = document.getElementById('nav-hidden');
// navHidden.addEventListener('click', () => {
//     hiddenList.style.display = 'none';
//     document.body.style.overflowY = 'auto';
// });

// Submenus
const btnShowSubmenusResponsive = document.querySelector('.btn-show-submenus-responsive');
const containerSubmenuResponsive = document.querySelectorAll('.container-submenu-responsive')
// btnShowSubmenusResponsive.addEventListener('click', () => {
//     containerSubmenuResponsive.forEach(element => {
//         element.classList.toggle('display-block');
//     });
// });

// Add header color when scrolling

let header01 = document.querySelector('header');
 window.addEventListener('scroll', () => {
     if (window.scrollY > stateScrollTwo) {
        header01.classList.add('header-color');
        // header01.style.width='90%';
        // header01.style.borderRadius='15px';
     } else{
         header01.classList.remove('header-color');
        //  header01.style.width='100%';
        //  header01.style.borderRadius='0';
         }
         });

// MAIN <1000 Remove nav bar when scrolling
const containerOpenNav = document.getElementById('container-open-nav');
let stateScroll = 0;
let stateScrollTwo = 250;
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    if(screenWidth <= 1000) {

if(scrollTop > stateScroll) {
    containerOpenNav.style.display = 'none';

    containerOpenNav.classList.add('hidde');

} else {
    containerOpenNav.style.display = 'flex';
    containerOpenNav.classList.add('show-nav-bar');
} 
} else {
    containerOpenNav.style.display = 'none';
    containerOpenNav.classList.add('hidde'); 

}
stateScroll = scrollTop <= 0 ? 0: scrollTop; 
});

// Remove guia nav bar when scrolling
// const guia = document.getElementById('guia');
// const filterGeneral = document.getElementById('filter-general');
// function hiddenGuia() {
// let stateScrolll = 0;
// window.addEventListener('scroll', () => {
//     const scrollTopp = window.scrollY;
//         if(scrollTopp > stateScrolll) {
//             guia.style.display = 'none';
//             filterGeneral.style.display = 'none'; 
//         } 
// }, { once: true});
// };
// hiddenGuia();



// Modes ui
const toggleDarkLight = document.getElementById('toggle-dark-light');
const toggleDarkLightFooter = document.getElementById('toggle-dark-light-footer'); /*TEMP*/
const darkIconResponsive = document.getElementById('dark-icon-responsive');
const lightIconResponsive = document.getElementById('light-icon-responsive');

let stateToggleDarkLightResponsive = true;
toggleDarkLight.addEventListener('click', () => {
    if(stateToggleDarkLightResponsive) {
    toggleDarkLight.classList.add('opacity-1');
    darkIconResponsive.style.display = 'none';
    lightIconResponsive.style.display = 'flex';
    console.log("UI")
    document.documentElement.style.setProperty('--bg-color', 'background-image: linear-gradient(to top, #ffffff, #c0c0c0, #858585, #4e4e4e, #1d1d1d)');
    document.documentElement.style.setProperty('--color-text', 'red');

    } else {
    toggleDarkLight.classList.add('active-dark');
    lightIconResponsive.style.display = 'none';
    darkIconResponsive.style.display = 'flex';
    console.log("UX")
    document.documentElement.style.setProperty('--bg-color', 'background-image: linear-gradient(to top, #000, #c0c0c0, #000, #4e4e4e, #1d1d1d)');
    document.documentElement.style.setProperty('--color-text', 'f0f0f0');
    }
    stateToggleDarkLightResponsive = !stateToggleDarkLightResponsive;
});


// let stateToggleDarkLightFooter = true;
// toggleDarkLightFooter.addEventListener('click', () => {
//     if(stateToggleDarkLightFooter) {
//     toggleDarkLight.classList.add('opacity-1');
//     darkIconResponsive.style.display = 'none';
//     lightIconResponsive.style.display = 'flex';
//     modeLight()
//     } else {
//     toggleDarkLight.classList.add('active-dark');
//     lightIconResponsive.style.display = 'none';
//     darkIconResponsive.style.display = 'flex';
//     modeDark()
//     }
//     stateToggleDarkLightFooter = !stateToggleDarkLightFooter;
// });
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
// const btnSettings = document.getElementById('btn-settings');
// const containerSettings = document.getElementById('container-settings');
// const filterOpenSettings = document.getElementById('filter-open-settings');

// btnSettings.addEventListener('click', () => {
//     // containerSettings.classList.toggle('open-settings');
//     form.style.display = 'block';
//     filterOpenSettings.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// });

// filterOpenSettings.addEventListener('click', () => {
//     containerSettings.classList.toggle('open-settings');
//     filterOpenSettings.style.display = 'none'
//     document.body.style.overflow = 'auto';
// })

// loader
const loading = document.getElementById('loading');
document.body.style.overflow = 'hidden';
    setTimeout(() => {
        loading.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 1000);


// Form
const form = document.getElementById('form');
const btnCloseLogin = document.querySelector('.btn-close-login');
const btnCloseLangs = document.querySelector('.btn-close-langs');
const btnOpenForm = document.getElementById('btn-open-form');
const btnOpenLang = document.getElementById('btn-open-lang');
const loginHome = document.getElementById('login-home');


document.querySelectorAll('.filter-login').forEach(element => {
    const filterLogin = element;
        filterLogin.addEventListener('click', () => {
        loginHome.style.display = 'none';
        filterLogin.style.display = 'none';
        languajes.style.display = 'none';
        form.style.display = 'none';
        document.body.style.overflow = 'auto';
});

btnOpenForm.addEventListener('click', () => {
    loginHome.style.display = 'flex';
    languajes.style.display = 'none';
    form.style.display = 'flex';
    filterLogin.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

btnOpenLang.addEventListener('click', () => {
    loginHome.style.display = 'none';
    form.style.display = 'none';
    languajes.style.display = 'flex';
    filterLogin.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
}); 


btnCloseLogin.addEventListener('click', () => {
    loginHome.style.display = 'none';
    form.style.display = 'none';
    languajes.style.display = 'none';
    document.body.style.overflow = 'auto';
});

btnCloseLangs.addEventListener('click', () => {
    loginHome.style.display = 'none';
    form.style.display = 'none';
    languajes.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Add List of menu responsive 
// const list = document.querySelectorAll('.list-nav li');
// list.forEach(element => {
//     const listItem = element;
//     listItem.addEventListener('click', () => {
//         containerSubmenuResponsive.forEach(element => {
//             containerSubmenuResponsive.style.display = 'block';
//         });
//     });
// });

// Animation Home
const linesContainer = document.querySelector('.lines');
for (let i = 0; i < 8; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    line.style.left = `${Math.random() * 100}%`;
    line.style.top = `${Math.random() * 100}%`;
    line.style.width = `${Math.random() * 30 + 20}%`;
    line.style.height = `${Math.random() * 1.5 + 0.5}px`;
    line.style.animationDuration = `${Math.random() * 10 + 15}s`;
    line.style.animationDelay = `${Math.random() * 10}s`;
    line.style.opacity = Math.random() * 0.2 + 0.1;
    linesContainer.appendChild(line);
}
});
