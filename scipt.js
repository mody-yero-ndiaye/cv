document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const sections = document.querySelectorAll('.section');

        if (targetId === "#accueil") {
            sections.forEach(section => {
                section.style.display = 'block';
            });
        } else {
            sections.forEach(section => {
                section.style.display = 'none';
            });

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        }
    });
});

// Afficher toutes les sections par défaut au chargement
document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'block';
});