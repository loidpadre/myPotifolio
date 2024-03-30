
const btnTheme = document.getElementById("themeToggle");

btnTheme.addEventListener("click", () => {
    document.body.classList.toggle("lightTheme");
    if (btnTheme.classList.contains("bi-moon-stars-fill")) {
        btnTheme.classList.remove("bi-moon-stars-fill");
        btnTheme.classList.add("bi-sun-fill");
    } else {
        btnTheme.classList.remove("bi-sun-fill");
        btnTheme.classList.add("bi-moon-stars-fill");
    }
});

const hamburger = document.querySelector(".hamburger")
const ulMenu = document.getElementById("menu")

hamburger.addEventListener("click", () =>{
    ulMenu.classList.toggle("showMenu")
})