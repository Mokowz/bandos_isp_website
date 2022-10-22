// Toggle navbar
const ham_menu = document.getElementById("ham_menu")
const nav_menu = document.getElementById("navmenu")
const call = document.getElementById("call")

nav_menu.addEventListener("click", () => {
    nav_menu.classList.remove("show")
})

ham_menu.addEventListener("click", () => {
    nav_menu.classList.toggle("show")
})

// Cards
const card = document.getElementsByClassName("serv_card")

for (let i=0; i < card.length; i++){
    
    card[i].addEventListener("click", () => {
        card[i].classList.toggle("serv_act")
    })
}