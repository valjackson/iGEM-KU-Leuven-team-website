// Partner information database
const partnerInfo = {
    'kul-wt': {
        title: 'KU Leuven Group W&T',
        description: 'The Faculty of Science and Engineering at KU Leuven is a leading institution in scientific research and technological innovation. The faculty supports groundbreaking research and education in various fields of science and engineering.',
        website: 'https://wet.kuleuven.be/english'
    },
    'kul-rd': {
        title: 'KU Leuven Research & Development',
        description: 'KU Leuven Research & Development (LRD) is the technology transfer office of KU Leuven. LRD supports researchers in their research collaborations, IP protection, and the creation of spin-off companies.',
        website: 'https://lrd.kuleuven.be/en'
    },
    'flanders': {
        title: 'EWI Department',
        description: 'The Department of Economy, Science and Innovation (EWI) of the Flemish Government develops and implements policies to stimulate scientific research and innovation in Flanders.',
        website: 'https://www.ewi-vlaanderen.be/en'
    },
    'snapgene': {
        title: 'SnapGene',
        description: 'SnapGene is a software solution that helps molecular biologists and genetic engineers to plan, visualize, and document their cloning and PCR experiments.',
        website: 'https://www.snapgene.com/'
    },
    'technovation': {
        title: 'TechnovationHub',
        description: 'Technovation Hub brings together innovative, entrepreneurial and high-tech student teams and student entrepreneurs and provides tailor-made services.',
        website: 'https://lrd.kuleuven.be/kuleuvenkick/technovation-hub'
    }
};

// Modal elements
const modal = document.getElementById('partnerModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');
const closeButton = document.querySelector('.close-modal');

// Add click event listeners to partner logos
document.querySelectorAll('.partner-logo').forEach(logo => {
    logo.addEventListener('click', () => {
        const partnerId = logo.dataset.partner;
        const partner = partnerInfo[partnerId];
        
        if (partner) {
            modalTitle.textContent = partner.title;
            modalDescription.textContent = partner.description;
            modalLink.href = partner.website;
            modal.classList.add('active');
        }
    });
});

// Close modal when clicking the close button
closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});