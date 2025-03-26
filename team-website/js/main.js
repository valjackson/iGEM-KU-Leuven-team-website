/**
 * Main JavaScript file
 * Entry point for all JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('iGem Team Website - Ready!');
    
    // Initialize all components
    initNavbar();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    initPageSpecific(currentPage);
});

/**
 * Determines which page is currently loaded
 * @returns {string} The current page name
 */
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (page === '' || page === 'index.html') {
        return 'home';
    }
    return page.replace('.html', '');
}

/**
 * Initializes page-specific functionality
 * @param {string} page - The name of the current page
 */
function initPageSpecific(page) {
    console.log(`Initializing page: ${page}`);
    
    switch(page) {
        case 'home':
            // Home page specific code
            initHomeAnimations();
            break;
        case 'about':
            // About page specific code
            break;
        case 'contact':
            // Contact page specific code
            initContactForm();
            break;
        default:
            console.log('No page-specific initialization needed');
    }
}

/**
 * Initialize animations for the home page
 */
function initHomeAnimations() {
    // Example of home page animations
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Fade in the hero section
        setTimeout(() => {
            heroSection.style.opacity = '1';
        }, 300);
    }
}

/**
 * Initialize contact form validation
 */
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Simple validation example
            let valid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (valid) {
                // Form submit logic would go here
                console.log('Form submitted successfully');
                contactForm.reset();
                alert('Thank you! Your message has been sent.');
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
}
