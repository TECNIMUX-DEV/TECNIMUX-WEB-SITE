document.addEventListener('DOMContentLoaded', () => {
    const manuals = document.getElementById('manuals');
    const manualsLinks = document.querySelectorAll('#manuals a');
    const visualizador = document.querySelector('#visualizador');

    manualsLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfFile = link.getAttribute('data-pdf');

            visualizador.innerHTML = `<iframe src="${pdfFile}" title="Visualizador" height="100%" width="100%" </iframe>`;
        });
    });
});


// Menu
const menuManuals = document.getElementById('menu-manuals');
const btnMenu = document.getElementById('btn-menu');

let  stateToggle = true;

btnMenu.addEventListener('click', () => {
    if (stateToggle) {
        menuManuals.style.display = 'flex';
    } else {
        menuManuals.style.display = 'none';
    }

    stateToggle = !stateToggle;
});