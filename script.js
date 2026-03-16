// script.js

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize ScrollReveal with default settings
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false // Set to true if you want animations to repeat on scroll up
    });

    // Apply animations to different sections
    sr.reveal('.hero-title', { origin: 'top', distance: '30px', delay: 200 });
    sr.reveal('.hero-subtitle', { delay: 400 });
    sr.reveal('.hero-cta', { delay: 600 });
    
    // Step cards staggered
    sr.reveal('.step-card', { interval: 200 });
    
    // Feature cards staggered
    sr.reveal('.feature-card', { interval: 100 });
    
    // Use case cards
    sr.reveal('.use-case-card', { interval: 150 });
    
    // Testimonial cards
    sr.reveal('.testimonial-card', { interval: 150 });
    
    // Pricing cards
    sr.reveal('.pricing-card', { interval: 200 });
    
    // Final CTA
    sr.reveal('.final-cta-title', { origin: 'scale' });
    sr.reveal('.final-cta .btn', { delay: 400 });

    // Add smooth scrolling for anchor links (optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});