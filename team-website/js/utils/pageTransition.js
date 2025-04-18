function initPageTransitions() {
    // Initial page load
    document.addEventListener('DOMContentLoaded', () => {
        const loading = document.querySelector('.page-loading');
        const pageContent = document.querySelector('.page-content');
        const footer = document.querySelector('.site-footer');
        
        // Show loading screen initially
        loading.classList.add('active');

        // When everything is loaded
        window.addEventListener('load', () => {
            const loading = document.querySelector('.page-loading');
            const pageContent = document.querySelector('.page-content');
            const footer = document.querySelector('.site-footer');
            const timeline = document.querySelector('.timeline-wrapper');
            
            // Hide loading screen and show content
            loading.classList.remove('active');
            pageContent.classList.add('loaded');
            
            // Show timeline if it exists
            if (timeline) {
                setTimeout(() => {
                    timeline.classList.add('loaded');
                }, 300); // Slight delay after main content loads
            }
            
            // Animate footer
            requestAnimationFrame(() => {
                footer.classList.add('loaded');
            });
        });
    });

    // Handle link clicks for smooth transitions
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.href && link.href.startsWith(window.location.origin)) {
            e.preventDefault();
            const loading = document.querySelector('.page-loading');
            const pageContent = document.querySelector('.page-content');
            const footer = document.querySelector('.site-footer');
            const timeline = document.querySelector('.timeline-wrapper');
            
            // Start the transition
            loading.classList.add('active');
            pageContent.classList.remove('loaded');
            footer.classList.remove('loaded');
            if (timeline) {
                timeline.classList.remove('loaded');
            }
            
            // Wait for transition to complete before navigating
            setTimeout(() => {
                window.location.href = link.href;
            }, 500); // matches var(--transition-medium) from CSS
        }
    });
}