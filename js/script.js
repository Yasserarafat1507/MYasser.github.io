// toggle icon navbar
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    //remove toggle and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
//scroll reveal
ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    dalay: 200
});
    ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .school-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    ScrollReveal().reveal('.about-img', { origin: 'left' });
    //typed js
    const typed = new Typed('.multiple-text',{
        strings:['Web Developer','Android Developer','Graphic Designer','Santri'],
        teypSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    });