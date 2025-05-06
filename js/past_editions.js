document.addEventListener('DOMContentLoaded', () => {
    // Initialize timeline visibility
    const timelineWrapper = document.querySelector('.timeline-wrapper');
    if (timelineWrapper) {
        setTimeout(() => {
            timelineWrapper.classList.add('loaded');
        }, 300);
    }
    
    // Use IntersectionObserver to animate timeline items when they come into view
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Create observer for timeline items
    const observerOptions = {
        root: null, // use viewport as reference
        rootMargin: '0px',
        threshold: 0.2 // trigger when 20% of the item is visible
    };
    
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's animated
            }
        });
    }, observerOptions);
    
    // Start observing each timeline item
    timelineItems.forEach((item) => {
        timelineObserver.observe(item);
    });
});