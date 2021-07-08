document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.noticiasNacionales', { delay: 500 });
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.noticiasInternacionales', { delay: 500 });
ScrollReveal().reveal('.social');
ScrollReveal().reveal('.showcase');