document.addEventListener('DOMContentLoaded', () => {
    setupCardFlip();
    setupTeamFilter();
});

function setupCardFlip() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            cards.forEach(c => {
                if (c !== card) c.classList.remove('flipped');
            });
            card.classList.toggle('flipped');
        });
    });

    document.addEventListener('click', () => {
        cards.forEach(card => card.classList.remove('flipped'));
    });
}

function setupTeamFilter() {
    const teamNav = document.querySelector('.team-nav');
    if (!teamNav) return;

    teamNav.addEventListener('click', (e) => {
        const link = e.target;
        if (!link.matches('a')) return;
        e.preventDefault();

        // Update active state
        teamNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');

        const category = link.textContent.toLowerCase().trim();
        
        // Filter cards
        document.querySelectorAll('.card-container').forEach(container => {
            const rolesElement = container.querySelector('.card-back p');
            let roles = [];
            
            // Find the roles paragraph by looking through all paragraphs
            container.querySelectorAll('.card-back p').forEach(p => {
                if (p.textContent.toLowerCase().includes('subteams:')) {
                    roles = p.textContent
                        .toLowerCase()
                        .split('subteams:')[1]
                        .split(',')
                        .map(role => role.trim());
                }
            });

            const shouldShow = category === 'all team' || roles.some(role => 
                role === category ||
                (category === 'wet lab' && role.includes('wet')) ||
                (category === 'dry lab' && role.includes('dry')) ||
                (category === 'marketing' && role.includes('marketing')) ||
                (category === 'finance' && role.includes('finance')) ||
                (category === 'wiki' && role.includes('wiki')) ||
                (category === 'design' && role.includes('design')) ||
                (category === 'outreach' && role.includes('outreach'))
            );

            // Reset flip state and apply visibility with transition
            const card = container.querySelector('.card');
            if (card) card.classList.remove('flipped');
            
            container.style.transition = 'opacity 0.3s ease-in-out';
            if (shouldShow) {
                container.style.display = 'block';
                requestAnimationFrame(() => {
                    container.style.opacity = '1';
                });
            } else {
                container.style.opacity = '0';
                setTimeout(() => {
                    container.style.display = 'none';
                }, 300);
            }
        });
    });
}