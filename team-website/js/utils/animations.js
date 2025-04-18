/**
 * Animation Utilities
 * Reusable animation functions for the entire site
 */

/**
 * Fade in an element
 * @param {HTMLElement} element - The element to fade in
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} callback - Optional callback after animation completes
 */
function fadeIn(element, duration = 300, callback) {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let start = null;
    
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        element.style.opacity = Math.min(progress / duration, 1);
        
        if (progress < duration) {
            window.requestAnimationFrame(animate);
        } else if (typeof callback === 'function') {
            callback();
        }
    }
    
    window.requestAnimationFrame(animate);
}

/**
 * Fade out an element
 * @param {HTMLElement} element - The element to fade out
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} callback - Optional callback after animation completes
 */
function fadeOut(element, duration = 300, callback) {
    element.style.opacity = '1';
    
    let start = null;
    
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        element.style.opacity = 1 - Math.min(progress / duration, 1);
        
        if (progress < duration) {
            window.requestAnimationFrame(animate);
        } else {
            element.style.display = 'none';
            if (typeof callback === 'function') {
                callback();
            }
        }
    }
    
    window.requestAnimationFrame(animate);
}

/**
 * Slide down animation (expand height)
 * @param {HTMLElement} element - The element to slide down
 * @param {number} duration - Animation duration in milliseconds
 */
function slideDown(element, duration = 300) {
    element.style.overflow = 'hidden';
    element.style.height = '0';
    element.style.display = 'block';
    
    const targetHeight = element.scrollHeight;
    
    let start = null;
    
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const easing = progress / duration;
        
        element.style.height = (targetHeight * Math.min(easing, 1)) + 'px';
        
        if (progress < duration) {
            window.requestAnimationFrame(animate);
        } else {
            element.style.height = 'auto';
            element.style.overflow = 'visible';
        }
    }
    
    window.requestAnimationFrame(animate);
}

/**
 * Slide up animation (collapse height)
 * @param {HTMLElement} element - The element to slide up
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} callback - Optional callback after animation completes
 */
function slideUp(element, duration = 300, callback) {
    element.style.overflow = 'hidden';
    element.style.height = element.offsetHeight + 'px';
    
    let start = null;
    
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const easing = 1 - (progress / duration);
        
        element.style.height = (element.offsetHeight * Math.max(easing, 0)) + 'px';
        
        if (progress < duration) {
            window.requestAnimationFrame(animate);
        } else {
            element.style.display = 'none';
            element.style.height = 'auto';
            if (typeof callback === 'function') {
                callback();
            }
        }
    }
    
    window.requestAnimationFrame(animate);
}

// Timeline animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Add to window load event
window.addEventListener('load', () => {
    if (document.querySelector('.timeline')) {
        initTimelineAnimations();
    }
});
