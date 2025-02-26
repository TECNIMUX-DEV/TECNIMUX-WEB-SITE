// Menu
const menuMain = document.getElementById('menu-main');
const btnMenu = document.getElementById('btn-menu');

let stateToggle = true;
btnMenu.addEventListener('click', () => {
    if(stateToggle) {
        menuMain.style.display = "block";
        btnMenu.style.position = "fixed";
    } else {
        menuMain.style.display = "none";
        btnMenu.style.position = "static";
    }
stateToggle =! stateToggle;
})



// Close Somos TX Home
const who = document.getElementById('who');
const somosTX = document.getElementById('somos-tx');
const btnCloseSomostx = document.getElementById('btn-close-somostx');

btnCloseSomostx.addEventListener('click', () => {
somosTX.style.display = "none";
})

who.addEventListener('click', () => {
    somosTX.style.display = "flex";
    })