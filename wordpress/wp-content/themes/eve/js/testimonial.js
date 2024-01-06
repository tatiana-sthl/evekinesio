document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelector('.testimonial-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let testimonialWidth = document.querySelector('.testimonial').offsetWidth + 2 * 16; // Largeur du témoignage + marges
    let currentIndex = 0;
    let testimonialsPerPage = 3; // Nombre de témoignages à afficher par page

    function showTestimonial(index) {
        const position = -index * testimonialWidth + 'px';
        testimonials.style.transform = 'translateX(' + position + ')';
    }

    function updateTestimonialWidth() {
        testimonialWidth = document.querySelector('.testimonial').offsetWidth + 2 * 16;
        showTestimonial(currentIndex);
    }

    function nextTestimonial() {
        if (currentIndex < testimonials.children.length - testimonialsPerPage) {
            currentIndex++;
        }
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        if (currentIndex > 0) {
            currentIndex--;
        }
        showTestimonial(currentIndex);
    }

    function handleResize() {
        updateTestimonialWidth();
        
        // Vérifier si l'écran est de petite taille (mobile)
        if (window.innerWidth < 768) {
            // Ajuster le nombre de témoignages affichés sur les petits écrans
            testimonialsPerPage = 1;
        } else {
            // Rétablir le nombre de témoignages par page pour les autres écrans
            testimonialsPerPage = 3;
        }

        showTestimonial(currentIndex);
    }

    // Afficher les témoignages au chargement
    handleResize();

    // Définir les événements pour les boutons suivant et précédent
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    // Ajouter une fonction pour naviguer avec les touches du clavier
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            nextTestimonial();
        } else if (e.key === 'ArrowLeft') {
            prevTestimonial();
        }
    });

    // Mettre en place un écouteur d'événement de redimensionnement de la fenêtre
    window.addEventListener('resize', handleResize);
});
