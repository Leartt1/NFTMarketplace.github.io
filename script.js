window.addEventListener('scroll', reveal);

function reveal() {
    var sections = document.querySelectorAll(".scroll-section");

    sections.forEach(function (section) {
        var windowheight = window.innerHeight;
        var sectionTop = section.getBoundingClientRect().top;
        var revealPoint = 150;
        var animationType = section.getAttribute("data-animation");

        if (sectionTop < windowheight - revealPoint) {
            section.style.animation = `animate-${animationType} 2s ease forwards`;
        } else {
            section.style.animation = '';
        }
    });
}



// Select all anchor links in the navigation menu
const navLinks = document.querySelectorAll('nav a');

// Add click event listeners to each link
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default behavior of anchor links
        
        // Get the target section ID from the link's href
        const targetId = link.getAttribute('href').substring(1);
        
        // Scroll to the target section with smooth behavior
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
    
    menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});