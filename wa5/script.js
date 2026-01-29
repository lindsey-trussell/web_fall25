
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

function showMenu() {
    const timing = {
        duration: 500,
        iterations: 1,
    };

    var shown = navMenu.classList.toggle("show");

    if (shown) {
        navToggle.setAttribute("aria-expanded", "true");
        navToggle.style.transform = "rotate(90deg)";
        navMenu.animate([
            {transform: 'translateY(-200px)', offset: 0},
        ], timing);
    }
    else {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.style.transform = "rotate(0deg)";
        navMenu.animate([
            {transform: 'translateY(200px)', offset: 0},
        ], timing);
    }
}

function checkKey(key_code) {
    if (key_code == 32) {
        showMenu();
        console.log("worked");
    }
}

navToggle.addEventListener('click', showMenu);