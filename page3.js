const nav = document.querySelector("nav");

window.addEventListener("scroll", function() {
    if (this.window.scrollY > 700) {
        nav.style.top = 0;
    }
    else {
        nav.style.top = "-50px";
    }
});