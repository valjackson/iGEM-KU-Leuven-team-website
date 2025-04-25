document.addEventListener('DOMContentLoaded', () => {
    // Initialize timeline visibility
    const timelineWrapper = document.querySelector('.timeline-wrapper');
    if (timelineWrapper) {
        setTimeout(() => {
            timelineWrapper.classList.add('loaded');
        }, 300);
    }
    
    // Initialize timeline item animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, 500 + (index * 200)); // Stagger the animations
    });
});