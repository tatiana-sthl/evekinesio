document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelector('.testimonial-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const testimonialWidth = document.querySelector('.testimonial').offsetWidth + 2 * 16; // Largeur du témoignage + marges
    let currentIndex = 0;

    function showTestimonial(index) {
        const position = -index * testimonialWidth + 'px';
        testimonials.style.transform = 'translateX(' + position + ')';
    }

    function nextTestimonial() {
        if (currentIndex < testimonials.children.length - 3) {
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

    // Afficher les trois premiers témoignages au chargement
    showTestimonial(currentIndex);

    // Définir les événements pour les boutons suivant et précédent
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    // Vous pouvez également ajouter une fonction pour naviguer avec les touches du clavier
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            nextTestimonial();
        } else if (e.key === 'ArrowLeft') {
            prevTestimonial();
        }
    });
});
