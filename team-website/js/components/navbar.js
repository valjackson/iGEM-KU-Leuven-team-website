/**
 * Navbar Component JavaScript
 * Handles mobile navigation functionality
 */

function initNavbar() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (!burger || !nav) {
        console.warn('Navbar elements not found');
        return;
    }

    // Toggle mobile menu
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        // Toggle Nav
        nav.classList.toggle('active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index * 0.1}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (nav.classList.contains('active') && 
            !nav.contains(event.target) && 
            !burger.contains(event.target)) {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
            
            // Reset animations when closing
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });

    // Highlight current page in navigation
    highlightCurrentPage();
}

function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if ((currentPage === 'index.html' && linkHref === 'index.html') ||
            (currentPage !== 'index.html' && linkHref && linkHref.includes(currentPage))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', initNavbar);
