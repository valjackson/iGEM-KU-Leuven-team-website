function initPageTransitions() {
    // Initial page load
    const loading = document.querySelector('.page-loading');
    const pageContent = document.querySelector('.page-content');
    const footer = document.querySelector('.site-footer');
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    
    // Show loading screen initially
    loading.classList.add('active');

    // When everything is loaded
    window.addEventListener('load', () => {
        // Hide loading screen and show content
        loading.classList.remove('active');
        pageContent.classList.add('loaded');
        
        // Animate footer as a single unit
        requestAnimationFrame(() => {
            footer.classList.add('loaded');
        });
    });

    // Handle link clicks for smooth transitions
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.href && link.href.startsWith(window.location.origin)) {
            e.preventDefault();
            
            // Close mobile menu if it's open
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                burger.classList.remove('toggle');
            }
            
            // Start the transition
            loading.classList.add('active');
            pageContent.classList.remove('loaded');
            footer.classList.remove('loaded');
            
            // Navigate to the new page
            setTimeout(() => {
                window.location.href = link.href;
            }, 300);
        }
    });
}