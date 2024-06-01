const navList = document.querySelector("#navList");
const Opened= document.querySelector("#Opened");
const Closed= document.querySelector("#Closed");

Opened.addEventListener("click",()=> {
    navList.classList.add("visible");
})
Closed.addEventListener("click", () => {
    navList.classList.remove("visible");
})



