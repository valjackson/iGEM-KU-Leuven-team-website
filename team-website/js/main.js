/**
 * Main JavaScript file
 * Entry point for all JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', () => {
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

// Partners slider seamless auto-scroll
(function() {
  const slider = document.querySelector('.partners-slider');
  const track = slider && slider.querySelector('.slider-track');
  if (!slider || !track) return;

  // Duplicate slides only once for seamless loop
  if (track.children.length && !track.classList.contains('duplicated')) {
    const slides = Array.from(track.children).slice();
    slides.forEach(slide => {
      track.appendChild(slide.cloneNode(true));
    });
    track.classList.add('duplicated');
  }

  // Calculate width of one set of slides (half the track)
  const slides = track.children;
  const slideCount = slides.length / 2;
  let setWidth = 0;
  for (let i = 0; i < slideCount; i++) {
    setWidth += slides[i].offsetWidth + parseInt(getComputedStyle(slides[i]).marginRight || 0);
  }

  let autoScroll = true;
  let speed = 1.2; // px per frame

  function scrollStep() {
    if (!autoScroll) return;
    slider.scrollLeft += speed;
    // When reaching the end of the first set, reset to start
    if (slider.scrollLeft >= setWidth) {
      slider.scrollLeft -= setWidth;
    }
    requestAnimationFrame(scrollStep);
  }

  // Pause on hover or drag
  slider.addEventListener('mouseenter', () => { autoScroll = false; });
  slider.addEventListener('mouseleave', () => {
    autoScroll = true;
    requestAnimationFrame(scrollStep);
  });

  // Drag-to-scroll (keep from previous solution)
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
    autoScroll = false;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    slider.style.cursor = 'grab';
    autoScroll = true;
    requestAnimationFrame(scrollStep);
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    slider.style.cursor = 'grab';
    autoScroll = true;
    requestAnimationFrame(scrollStep);
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });
  // Touch support
  slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    autoScroll = false;
  });
  slider.addEventListener('touchend', () => {
    isDown = false;
    autoScroll = true;
    requestAnimationFrame(scrollStep);
  });
  slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });

  // Start auto-scroll
  requestAnimationFrame(scrollStep);
})();
