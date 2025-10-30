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
    btnOpenNavPrimaryNav.style.display = 'none';
    hiddenList.style.display ='flex';
    hiddenList.style.overflowY = 'hidden';
    filterGeneral.style.display = 'none';
    // containerOpenNav.style.display = 'none';
    document.body.style.overflowY = 'hidden';
});

let btnCloseSecondNav = document.getElementById('btn-close-second-nav');
btnCloseSecondNav.addEventListener('click', () => {
    btnOpenNavPrimaryNav.style.display = 'block';
    hiddenList.style.display = 'none';
    document.body.style.overflowY = 'auto';
    // containerOpenNav.style.display = 'flex';
});


// let navHidden = document.getElementById('nav-hidden');
// navHidden.addEventListener('click', () => {
//     hiddenList.style.display = 'none';
//     document.body.style.overflowY = 'auto';
// });

// Submenus
// const btnShowSubmenusResponsive = document.querySelector('.btn-show-submenus-responsive');
// btnShowSubmenusResponsive.addEventListener('click', () => {
//     containerSubmenuResponsive.forEach(element => {
//         element.classList.toggle('display-block');
//     });
// });

// Show Submenus
const activeMenuResponsive = document.querySelectorAll('.active-menu-responsive')
activeMenuResponsive.forEach(active => {
    active.addEventListener('click', () => {
      // Encuentra los li dentro del div padre de la sección actual
      const liElements = active.parentElement.querySelectorAll('li');
      
      // Alterna la visibilidad de cada li
      liElements.forEach(li => {
        if (li.style.display === 'none' || li.style.display === '') {
          li.style.display = 'block'; // Muestra el li
        } else {
          li.style.display = 'none'; // Oculta el li
        }
      });
    });
  });

const scrollWrapper = document.querySelector('.scroll-wrapper'); // el contenedor con data-simplebar
const simplebarContent = scrollWrapper.querySelector('.simplebar-content-wrapper');

const header01 = document.getElementById('header-01');

simplebarContent.addEventListener('scroll', () => {
  if (simplebarContent.scrollTop > 0) {
    header01.classList.add('header-color');
    document.getElementsByClassName('primary-nav')[0].style.display = 'flex';
    // backToTop.style.display = "flex";
  } else {
    header01.classList.remove('header-color');
    // backToTop.style.display = "none";
  }
});

// MAIN <1000 Remove nav bar when scrolling
// const containerOpenNav = document.getElementById('container-open-nav');
// let stateScroll = 0;
// let stateScrollTwo = 250;
// window.addEventListener('scroll', () => {
//     const scrollTop = window.scrollY;
//     const screenWidth = window.innerWidth || document.documentElement.clientWidth;
//     if(screenWidth <= 1000) {

// if(scrollTop > stateScroll) {
//     containerOpenNav.style.display = 'none';

//     containerOpenNav.classList.add('hidde');

// } else {
//     containerOpenNav.style.display = 'flex';
//     containerOpenNav.classList.add('show-nav-bar');
// } 
// } else {
//     containerOpenNav.style.display = 'none';
//     containerOpenNav.classList.add('hidde'); 

// }
// stateScroll = scrollTop <= 0 ? 0: scrollTop; 
// });

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

const filterGeneral = document.getElementById('filter-general');


// Modes ui
// const toggleDarkLight = document.getElementById('toggle-dark-light');
// const toggleDarkLightFooter = document.getElementById('toggle-dark-light-footer'); /*TEMP*/
// const darkIconResponsive = document.getElementById('dark-icon-responsive');
// const lightIconResponsive = document.getElementById('light-icon-responsive');

const toggleDarkLight = document.querySelectorAll('.toggle-dark-light');
const darkIconResponsive = document.querySelectorAll('.dark-icon-responsive');
const lightIconResponsive = document.querySelectorAll('.light-icon-responsive');


function activeDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  let stateToggleDarkLightResponsive = true;
  toggleDarkLight.forEach((element) => {  // Cambié 'toggleDarkLight' por 'element' para evitar conflictos de nombres
  
    if (stateToggleDarkLightResponsive) {
      element.addEventListener('click', () => {
        darkIconResponsive.forEach((darkIcon) => {  // Cambié los paréntesis de la función de flecha
          darkIcon.classList.toggle('display-block');
          darkIcon.classList.add('display-none');
        });
        activeDarkMode();
      });
    } else {
      element.addEventListener('click', () => {
        lightIconResponsive.forEach((lightIcon) => {  // Arreglado de la misma forma
          lightIcon.classList.toggle('display-block');
          darkIcon.classList.toggle('display-none');
        });
  
        stateToggleDarkLightResponsive = !stateToggleDarkLightResponsive;  // Cambio de estado
      });
    }
  
  });
  



//     if(stateToggleDarkLightResponsive) {
//     // toggleDarkLight.classList.add('opacity-1');
//     darkIconResponsive.forEach(darkIconResponsive => {
//         darkIconResponsive.classList.add('display-none');
//     });
//     // darkIconResponsive.style.display = 'none';
//     // lightIconResponsive.style.display = 'flex';
//     // console.log("UI")

//     activeDarkMode();
//     // document.documentElement.style.setProperty('--bg-color', '#fff');
//     // document.documentElement.style.setProperty('--color-text', '#000');

//     } else {
//     // toggleDarkLight.classList.add('active-dark');
//     // lightIconResponsive.style.display = 'none';
//     // darkIconResponsive.style.display = 'flex';
//     // console.log("UX")
//     // document.documentElement.style.setProperty('--bg-color', '#000');
//     // document.documentElement.style.setProperty('--color-text', '#fff');
//     lightIconResponsive.forEach(lightIconResponsive => {
//         lightIconResponsive.classList.add('display-block');
//     });

//     }
//     stateToggleDarkLightResponsive = !stateToggleDarkLightResponsive;
// })



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


// Obtener elementos
const menuHTML = `
<ul class="sub-menu-second">
  <a href="#">
    <div class="btn-open-lang item-login btn-sub-menu container-lang-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-world">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
      </svg>
    </div>
  </a>

  <a href="#">
    <div class="btn-open-form item-login btn-sub-menu container-login-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-login-2">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
        <path d="M3 12h13l-3 -3" />
        <path d="M13 15l3 -3" />
      </svg>
    </div>
  </a>
</ul>
`;

// Insertamos el menú en todos los contenedores
document.querySelectorAll(".container-sub-menu-rr").forEach((container) => {
  container.innerHTML = menuHTML;
  // container.classList.add('flex-container');
});

// Capturamos TODOS los botones en todas las instancias
document.querySelectorAll(".btn-open-lang").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Botón de idioma presionado en este menú.");
  });
});

document.querySelectorAll(".btn-open-form").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Botón de login presionado en este menú.");
  });
});



const form = document.getElementById('form');
const btnCloseLogin = document.querySelector('.btn-close-login');
const btnCloseLangs = document.querySelector('.btn-close-langs');
// const btnOpenForm = document.getElementById('btn-open-form');
// const btnOpenLang = document.getElementById('btn-open-lang');
const loginHome = document.getElementById('login-home');
const languages = document.getElementById('languages');
const filterForms = document.querySelectorAll('.filter-form'); 

// Función para cerrar el formulario
function closeAll() {
  loginHome.style.display = 'none';
  form.style.display = 'none';
  languages.style.display = 'none';
  document.body.style.overflow = 'auto';

  // Ocultar todos los elementos de filtro
  filterForms.forEach(filter => {
      filter.style.display = 'none';
  });
}

// Agregar eventos a cada filterForm
filterForms.forEach(filterForm => {
  filterForm.addEventListener('click', closeAll);
});

// Capturar **todas** las instancias de los botones
document.querySelectorAll(".btn-open-form").forEach(btn => {
  btn.addEventListener("click", () => {
      loginHome.style.display = 'flex';
      languages.style.display = 'none';
      form.style.display = 'flex';
      hiddenList.style.display = 'none';
      btnOpenNavPrimaryNav.style.display = 'block';

      // Mostrar todos los elementos de filtro
      filterForms.forEach(filter => {
          filter.style.display = 'block';
      });

      document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll(".btn-open-lang").forEach(btn => {
  btn.addEventListener("click", () => {
      loginHome.style.display = 'none';
      form.style.display = 'none';
      languages.style.display = 'flex';
      hiddenList.style.display = 'none';
      btnOpenNavPrimaryNav.style.display = 'block';

      // Mostrar todos los elementos de filtro
      filterForms.forEach(filter => {
          filter.style.display = 'block';
      });

      document.body.style.overflow = 'hidden';
  });
});

// Botones de cierre
btnCloseLogin.addEventListener('click', closeAll);
btnCloseLangs.addEventListener('click', closeAll);


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
// const linesContainer = document.querySelector('.lines');
// for (let i = 0; i < 8; i++) {
//     const line = document.createElement('div');
//     line.classList.add('line');
//     line.style.left = `${Math.random() * 100}%`;
//     line.style.top = `${Math.random() * 100}%`;
//     line.style.width = `${Math.random() * 30 + 20}%`;
//     line.style.height = `${Math.random() * 1.5 + 0.5}px`;
//     line.style.animationDuration = `${Math.random() * 10 + 15}s`;
//     line.style.animationDelay = `${Math.random() * 10}s`;
//     line.style.opacity = Math.random() * 0.2 + 0.1;
//     linesContainer.appendChild(line);
// }
});


// Open social networks
// const btnOpenSocialNetworks = document.getElementById('btn-open-social-networks');
// const socialNetworks = document.getElementById('social-networks');
// let isOpen = true;
// btnOpenSocialNetworks.addEventListener('mouseenter', () => {
//   socialNetworks.style.display = 'block';

//   setTimeout(() => {
//     socialNetworks.style.display = 'none';
//   }, 10000);
// });

// QR-Code
// const containerQrSocial = document.getElementById('container-qr-social');
// const qrCodeSocial = document.getElementById('qr-code-social');

// let stateToggleNetworks = true;
// qrCodeSocial.addEventListener('click', () => {
// if(stateToggleNetworks) {
//   qrCodeSocial.classList.add('translate');
//   qrCodeSocial.style.width = '400px';
// } else {
//   qrCode.classList.remove('translate');
//   qrCodeSocial.style.width = '45px';
// }

// stateToggleNetworks = ! stateToggleNetworks;
// }) 
// const containerQrSocial = document.getElementById('container-qr-social');

// Languages
// Botones
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');

// Detecta si hay un idioma guardado en localStorage
const currentLang = localStorage.getItem('lang') || 'es';

// Aplica idioma guardado automáticamente
applyLanguage(currentLang);

// --- Función principal ---
function applyLanguage(lang) {
  // Guarda idioma en localStorage
  localStorage.setItem('lang', lang);

  // Crea la cookie que usa Google Translate (formato: /origen/destino)
  const cookieValue = `/es/${lang}`;
  document.cookie = `googtrans=${cookieValue};path=/;domain=${location.hostname}`;

  // Elimina la barra del traductor si aparece
  const banner = document.querySelector('.goog-te-banner-frame');
  if (banner) banner.remove();

  // Recarga la página solo si el idioma cambia
  if (lang !== currentLang) {
    location.reload();
  }
}

// --- Eventos de los botones ---
l1.addEventListener('click', () => applyLanguage('es'));
l2.addEventListener('click', () => applyLanguage('en'));


// QR Code
const qrImg = document.getElementById("qr-img");

let isFloating = false;

qrImg.addEventListener("click", () => {
  if (isFloating) return;
  isFloating = true;
  // General Mask
let generalMask = document.getElementById('general-mask');
  generalMask.style.display = 'block';

  // Clonamos el QR para animarlo sin mover el original
  const qrClone = qrImg.cloneNode(true);
  qrClone.id = "qr-clone";
  document.body.appendChild(qrClone);


  // Posicionamos el clon encima del original
  const rect = qrImg.getBoundingClientRect();
  qrClone.style.position = "fixed";
  qrClone.style.top = rect.top + "px";
  qrClone.style.left = rect.left + "px";
  qrClone.style.height = rect.height + "px";
  qrClone.style.width = rect.width + "px";
  qrClone.style.transition = "all 0.6s ease-in-out";
  qrClone.style.zIndex = "9999";

  // Forzamos un reflow para que aplique el siguiente paso con transición
  void qrClone.offsetWidth;

  // Ahora animamos al centro con escala x3
  qrClone.classList.add("qr-floating");

  // Luego de 3.5 segundos lo devolvemos
  setTimeout(() => {
    qrClone.classList.remove("qr-floating");
    qrClone.style.top = rect.top + "px";
    qrClone.style.left = rect.left + "px";
    qrClone.style.transform = "scale(1)";

    setTimeout(() => {
      qrClone.remove(); // eliminar clon
      isFloating = false;
      generalMask.style.display = 'none';
    }, 600); // esperar que termine la animación de regreso
  }, 3500);
});





// Btn info Updates
const infoUpdates = document.getElementById('info-updates');
const btnInfo = document.getElementById('btn-info');
const dataUpdates = document.getElementById('data-updates');


let stateDataAnimation = true;  // Declaramos la variable fuera del listener

btnInfo.addEventListener('click', () => {
  // Primero, eliminamos las clases de animación actuales
  dataUpdates.classList.remove('data');
  infoUpdates.classList.remove('data-animation');
  infoUpdates.classList.remove('data-animation-end');
  
  // Aplicamos las animaciones de entrada
  if (stateDataAnimation) {
    dataUpdates.classList.add('data');
    infoUpdates.classList.add('data-animation');

    // Después de 5 segundos, aplicamos la animación de salida
    setTimeout(() => {
      infoUpdates.classList.add('data-animation-end');
      dataUpdates.classList.remove('data');
    }, 5000);  // Duración de la animación de entrada

  } else {
    // Si no es el primer clic, solo aplicamos la animación de entrada
    dataUpdates.classList.add('data');
    infoUpdates.classList.add('data-animation');

    setTimeout(() => {
      infoUpdates.classList.add('data-animation-end');
      dataUpdates.classList.remove('data');
    }, 5000);  
  }

  // Cambiar el estado de la animación para la próxima vez
  stateDataAnimation = !stateDataAnimation;
});



// Button back to top
document.addEventListener("DOMContentLoaded", () => {
  const scrollWrapper = document.querySelector('.scroll-wrapper'); // Asegúrate que este contenedor tenga data-simplebar
  const simplebarContent = scrollWrapper.querySelector('.simplebar-content-wrapper');

  const backToTop = document.getElementById("back-to-top");

  // Mostrar botón cuando haya desplazamiento
  simplebarContent.addEventListener("scroll", () => {
    if (simplebarContent.scrollTop > 0) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });
});



// THREE JS
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Variables para seguimiento del cursor
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let targetX = 0;
  let targetY = 0;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;
  
  // Variables para Three.js
  let scene, camera, renderer;
  let avatar, clock;
  let tempObject;
  
  // Inicializar Three.js
  function init() {
      // Crear escena
      scene = new THREE.Scene();
      
      // Crear cámara
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
      
      // Crear renderer
      renderer = new THREE.WebGLRenderer({ 
          antialias: true,
          alpha: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
            renderer.domElement.style.zIndex = "9999"; // Asegura que esté por encima de todo
      document.getElementById('canvas-container').appendChild(renderer.domElement);
      
      // Añadir luces
      addLights();
      
      // Crear objeto temporal mientras carga la imagen
      createTempObject();
      
      // Cargar la imagen
      loadAvatar();
      
      // Iniciar reloj para animaciones
      clock = new THREE.Clock();
      
      // Añadir event listeners
      addEventListeners();
      
      // Iniciar bucle de animación
      animate();
  }
  
  // Añadir luces a la escena
  function addLights() {
      // Luz ambiental
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      // Luz direccional principal
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);
  }
  
  // Crear objeto temporal mientras carga la imagen
  function createTempObject() {
      const geometry = new THREE.SphereGeometry(0.2, 4, 4);
      const material = new THREE.MeshStandardMaterial({
          color: 0x8929ff,
          emissive: 0x8929ff,
          emissiveIntensity: .5,
          metalness: 0.8,
          roughness: 0.1
      });
      tempObject = new THREE.Mesh(geometry, material);
      scene.add(tempObject);
  }
  
  // Cargar la imagen PNG
  function loadAvatar() {
      // Crear un cargador de texturas
      const textureLoader = new THREE.TextureLoader();
      
      // Cargar la imagen PNG
      textureLoader.load(
          // URL de la imagen - ajusta esta ruta según la ubicación de tu imagen
          'img/Avatar/Cs.png',
          // Callback cuando la imagen está cargada
          function(texture) {
              // Eliminar objeto temporal
              scene.remove(tempObject);
              
              // Obtener las proporciones de la imagen para mantener su aspecto
              const imageAspect = texture.image.width / texture.image.height;
              
              // Crear geometría del plano con las proporciones correctas
              const planeGeometry = new THREE.PlaneGeometry(imageAspect, 1);
              
              // Crear material con la textura
              const planeMaterial = new THREE.MeshBasicMaterial({ 
                  map: texture,
                  transparent: true, // Permitir transparencia si el PNG tiene canal alfa
                  side: THREE.DoubleSide // Visible desde ambos lados
              });
              
              // Crear malla
              avatar = new THREE.Mesh(planeGeometry, planeMaterial);
              
              // Ajustar escala (ajusta este valor según el tamaño que necesites)
              avatar.scale.set(.2, .2, .2);
              
              // Añadir a la escena
              scene.add(avatar);
          },
          // Callback de progreso
          function(xhr) {
              console.log((xhr.loaded / xhr.total * 100) + '% cargado');
          },
          // Callback de error
          function(error) {
              console.error('Error al cargar la imagen:', error);
          }
      );
  }
  
  // Añadir event listeners
  function addEventListeners() {
      // Seguimiento del cursor
      document.addEventListener('mousemove', (event) => {
          mouseX = event.clientX;
          mouseY = event.clientY;
      });
      
      // Manejar cambio de tamaño de ventana
      window.addEventListener('resize', () => {
          windowHalfX = window.innerWidth / 2;
          windowHalfY = window.innerHeight / 2;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });
  }
  
  // Bucle de animación
  function animate() {
      requestAnimationFrame(animate);
      
      // Calcular posición objetivo basada en la posición del mouse
      targetX = (mouseX - windowHalfX) * 0.007;
      targetY = (mouseY - windowHalfY) * 0.007;
      
      // Aplicar easing para movimiento suave
      if (avatar) {
          // Mover hacia la posición del cursor con efecto suave
          avatar.position.x += (targetX - avatar.position.x) * 0.4;
          avatar.position.y += (-targetY - avatar.position.y) * 0.4;
          
          // Rotar ligeramente hacia el cursor
          avatar.rotation.z = targetX * 0.5;
      } else if (tempObject) {
          // Mover el objeto temporal mientras carga la imagen
          tempObject.position.x += (targetX - tempObject.position.x) * 0.05;
          tempObject.position.y += (-targetY - tempObject.position.y) * 0.05;
          tempObject.rotation.x += 0.01;
          tempObject.rotation.y += 0.01;
      }
      
      renderer.render(scene, camera);
  }
  
  // Iniciar la aplicación
  init();
});

// Login supabase

// Inicializar Supabase
const supabaseUrl = "https://gtzrweraragayovdrysa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0enJ3ZXJhcmFnYXlvdmRyeXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MzQ3NDIsImV4cCI6MjA1ODAxMDc0Mn0.G6aNX5m8DVaEwhbcPOjs2E8juQGCR3dp20Ame3Xe6mU"; // Usa la clave pública de Supabase
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey, {

  auth: {
    persistSession: true,
  },
});



// Función para registrar usuarios
async function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
          emailRedirectTo: "https://tu-sitio.com/confirmacion",
      },
  });

  if (error) {
      console.error("Error al registrarse:", error.message);
      alert(`Error: ${error.message}`);
  } else {
      console.log("Usuario registrado:", data);
      alert("Registro exitoso. Revisa tu correo para verificar.");
  }
}



// Función para iniciar sesión
async function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        console.log("Error al iniciar sesión:");
        alert(`Error: ${error.message}`);
    } else {
        console.log("Ingreso exitoso de:", data);
        alert("Logeo exitoso");
    }
}

// Función para cerrar sesión
async function signOut() {
    await supabase.auth.signOut();
    console.log("Sesión Cerrada.");
    alert("Sesión Cerrada.");
}


// Our
const btnCloseOur = document.getElementById('btn-close-our');

const btnOpenOur = document.querySelectorAll('.btnOpenOur');
const our = document.querySelector('.our'); // Asegúrate de tener esto

btnOpenOur.forEach(btn => {
  btn.addEventListener('click', () => {
    our.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.getElementsByClassName('hidden-list')[0].style.display = 'none';
  });
});



btnCloseOur.addEventListener('click', () => {
    our.style.display = 'none';
    document.body.style.overflow = 'auto';
});


// Add animations when scroll
const sections = document.querySelectorAll('.animation-section');

sections.forEach(section => {
  const id = section.id;
  const alreadyViewed = localStorage.getItem(`viewed-${id}`);

  if (alreadyViewed === 'true') {
    section.classList.add('visible');
    return; // No hace falta observar
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        localStorage.setItem(`viewed-${id}`, 'true');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(section);
});

// Accesibilidad
const btnAcc = document.getElementById('btn-acc');
const sAcc = document.getElementById('sAcc');
const capaBehind = document.getElementById('capa-behind');
const close = document.getElementById('close');

btnAcc.addEventListener('click', () => {
    sAcc.style.display = 'flex';
    capaBehind.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

capaBehind.addEventListener('click', () => {
    sAcc.style.display = 'none';
    capaBehind.style.display = 'none';
    document.body.style.overflow = 'auto';
});

close.addEventListener('click', () => {
    sAcc.style.display = 'none';
    capaBehind.style.display = 'none';
    document.body.style.overflow = 'auto';
});


// More
const btnMore = document.getElementById('btn-more');
const moreBox = document.getElementById('more-box');

btnMore.addEventListener('click', () => {
    moreBox.style.display = 'flex';
    btnMore.style.display = 'none';
});


// Theme
const onLight = document.getElementById('on-light');
const onDark = document.getElementById('on-dark');

onLight.addEventListener('click', () => {
    onLight.style.display = 'none';
    onDark.style.display = 'block';
});