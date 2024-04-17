const Nav_List = document.querySelector("#Nav_List");
const Opened= document.querySelector("#Opened");
const Closed= document.querySelector("#Closed");

Opened.addEventListener("click",()=> {
    Nav_List.classList.add("visible");
})
Closed.addEventListener("click", () => {
    Nav_List.classList.remove("visible");
})



