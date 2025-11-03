// Minimal main.js created for GitHub Pages deployment
document.addEventListener('DOMContentLoaded', function() {
  // Initialize WOW if available
  if (typeof WOW === 'function') {
    try { new WOW().init(); } catch(e) { console.log('WOW init failed', e); }
  }
  // Initialize Owl Carousel if available
  try {
    if (typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel === 'function') {
      jQuery('.owl-carousel').owlCarousel();
    }
  } catch(e) { console.log('Owl init error', e); }
});
