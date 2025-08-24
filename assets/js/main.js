/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true 
});

/* Home */
sr.reveal('.home__data'); 
sr.reveal('.home__img', { delay: 400 }); 
sr.reveal('.home__social-icon', { interval: 200 }); 

/* About */
sr.reveal('.about__img'); 
sr.reveal('.about__subtitle, .about__text', { delay: 400 }); 

/* Skills */
sr.reveal('.skills__subtitle, .skills__text'); 
sr.reveal('.skills__img', { delay: 400 }); 
sr.reveal('.skills__data', { interval: 200 }); 

/* Education */
sr.reveal('.education .work__img', { interval: 200 }); 

/* Projects */
sr.reveal('.project__card, .project__img', { interval: 200 }); 

/* Experience */
sr.reveal('.experience__card, .experience__item', { interval: 200 }); 

/* Certificates */
sr.reveal('.certificate__card', { interval: 200 }); 

/* Goals */
sr.reveal('.future__container, .future__title', { interval: 200 }); 

/* Contact */
sr.reveal('.contact__info', { interval: 200 });