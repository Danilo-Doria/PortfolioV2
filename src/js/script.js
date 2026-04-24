const btn = document.getElementById('menu-btn')
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

btn.addEventListener('click', () => {
    sidebar.classList.toggle('invisible');
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('invisible');
    btn.classList.toggle('open');

    if (!sidebar.classList.contains('invisible')) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
});

overlay.addEventListener('click', () => {
    sidebar.classList.toggle('invisible');
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('invisible');
    btn.classList.toggle('open');
});

const navbar = document.getElementById('navbar');
const navbarMobile = document.getElementById('navbar-mobile');
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        navbar.classList.add("-translate-y-full");
        navbar.classList.remove("translate-y-0");
        navbarMobile.classList.add("-translate-y-full");
        navbarMobile.classList.remove("translate-y-0");

    } else {
        navbar.classList.add("translate-y-0");
        navbar.classList.remove("-translate-y-full");
        navbarMobile.classList.add("translate-y-0");
        navbarMobile.classList.remove("-translate-y-full");
    }
    lastScroll = currentScroll;
});


const sections = document.querySelectorAll("section");
const img = document.getElementById("image");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-10");
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
});

sections.forEach(section => observer.observe(section));

window.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.remove("opacity-0","-translate-x-10");
    navbar.classList.add("opacity-100","translate-x-0");
});


window.addEventListener("DOMContentLoaded", () => {
    const leftBar = document.getElementById("left-bar");
    const rightBar = document.getElementById("right-bar");
    
    [leftBar, rightBar].forEach(bar => {
        bar.classList.remove("opacity-0", "translate-y-10");
        bar.classList.add("opacity-100", "translate-y-0");
  });
});