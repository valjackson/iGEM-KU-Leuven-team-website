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
    'ewi': {
        title: 'EWI',
        description: 'The Department of Economy, Science and Innovation (EWI) of the Flemish Government develops and implements policies to stimulate scientific research and innovation in Flanders.',
        website: 'https://www.ewi-vlaanderen.be/en'
    },
    'pollet-water-group': {
        title: 'Pollet Water Group',
        description: 'Pollet Water Group is a leading provider of water treatment solutions, specializing in innovative technologies for water purification, filtration, and environmental sustainability.',
        website: 'https://www.polletwatergroup.com'
    },
    'cargill': {
        title: 'Cargill',
        description: 'Cargill is a global food corporation that provides food, agriculture, financial and industrial products and services. They are committed to sustainable agriculture and innovative food solutions worldwide.',
        website: 'https://www.cargill.com/'
    },
    'snapgene': {
        title: 'SnapGene',
        description: 'SnapGene is a software solution that helps molecular biologists and genetic engineers to plan, visualize, and document their cloning and PCR experiments.',
        website: 'https://www.snapgene.com/'
    },
    'datacamp': {
        title: 'DataCamp',
        description: 'DataCamp is the world\'s leading platform for learning data science and analytics. They provide interactive courses and hands-on practice to help individuals and organizations build data skills.',
        website: 'https://www.datacamp.com/'
    },
    'bain-company': {
        title: 'Bain & Company',
        description: 'Bain & Company is a global management consulting firm that helps organizations drive sustainable growth and innovation. They work with leading companies across industries to solve complex business challenges.',
        website: 'https://www.bain.com/'
    },
    'technovation': {
        title: 'TechnovationHub',
        description: 'Technovation Hub brings together innovative, entrepreneurial and high-tech student teams and student entrepreneurs and provides tailor-made services.',
        website: 'https://lrd.kuleuven.be/kuleuvenkick/technovation-hub'
    },
    'promega': {
        title: 'Promega Corporation',
        description: 'Promega is a global biotechnology company that provides high-quality reagents and tools for molecular biology, protein analysis, and cell biology. Their technologies support research across academic and industrial settings.',
        website: 'https://be.promega.com/'
    },
    'idt': {
        title: 'Integrated DNA Technologies',
        description: 'Integrated DNA Technologies (IDT) is a leading provider of custom nucleic acids and genomics solutions. Their high-quality DNA and RNA products support research in synthetic biology, diagnostics, and therapeutics worldwide.',
        website: 'https://eu.idtdna.com/'
    },
    'eppendorf': {
        title: 'Eppendorf',
        description: 'Eppendorf is a trusted provider of laboratory instruments and consumables, specializing in liquid handling, centrifugation, and sample preparation. Their reliable solutions support scientists in life science research.',
        website: 'https://www.eppendorf.com/'
    },
    'twist-bioscience': {
        title: 'Twist Bioscience',
        description: 'Twist Bioscience is a leading synthetic biology company specializing in high-quality, custom DNA synthesis. Their scalable platform enables breakthroughs in research.',
        website: 'https://www.twistbioscience.com/'
    },
    'genscript': {
        title: 'GenScript',
        description: 'GenScript is a global biotechnology company offering gene synthesis, peptide production, and protein engineering services. Their solutions accelerate research and development across synthetic biology and biopharmaceuticals.',
        website: 'https://www.genscript.com/'
    },
    'new-england-biolabs': {
        title: 'New England Biolabs',
        description: 'New England Biolabs is a leading provider of reagents for DNA manipulation and molecular biology. Known for its high-quality enzymes and sustainable practices, NEB supports innovation in life science research worldwide.',
        website: 'https://www.neb.com/'
    },
    'cultivarium': {
        title: 'Cultivarium',
        description: 'Cultivarium is a non-profit organization advancing tools for engineering non-model microorganisms. Their open-source resources support innovation in synthetic biology by enabling broader access to diverse microbial systems.',
        website: 'https://www.cultivarium.org/'
    },
    'reshape-biotech': {
        title: 'Reshape Biotech',
        description: 'Reshape Biotech develops automated laboratory instruments designed to accelerate microbiology research. Their user-friendly robotics platforms streamline routine lab tasks, enabling greater efficiency and reproducibility in scientific workflows.',
        website: 'https://www.reshapebiotech.com/'
    },
    'atcc': {
        title: 'ATCC',
        description: 'The American Type Culture Collection (ATCC) is a global biological resource center that provides authenticated biological materials and expertise to support scientific research and innovation.',
        website: 'https://www.atcc.org/'
    },
    'globachem': {
        title: 'Globachem',
        description: 'Globachem is a specialized chemical company providing high-quality reagents and laboratory chemicals for research and industrial applications.',
        website: 'https://globachem.com/en/'
    },
    'novogene': {
        title: 'Novogene',
        description: 'Novogene is a leading genomics company providing comprehensive sequencing services, including whole genome sequencing, transcriptome analysis, and bioinformatics solutions for research and clinical applications.',
        website: 'https://en.novogene.com/'
    },
    'glasatelier-saillart': {
        title: 'Glasatelier Saillart',
        description: 'Glasatelier Saillart is a specialized glassblowing and scientific glassware company, creating custom laboratory equipment and artistic glass pieces with precision and craftsmanship.',
        website: 'https://www.glasatelier-saillart.be/'
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