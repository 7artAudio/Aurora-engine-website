/**
 * AURORA WEB — MAIN SCRIPT
 * Hero Prototype v3
 */

document.addEventListener('DOMContentLoaded', () => {
  // Trigger initial dark emergence sequence
  requestAnimationFrame(() => {
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-loaded');
  });

  // Handle scroll indication and Header ambient backdrop
  const header = document.getElementById('site-header');
  const scrollIndicator = document.getElementById('scroll-indicator');

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Fade scroll indicator gently on initial scroll
    if (scrollIndicator) {
      if (currentScrollY > 50) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
      } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
      }
    }

    // Header ambient backdrop activation when scrolling past initial Hero area
    if (header) {
      if (currentScrollY > 80) {
        header.style.background = 'rgba(0, 0, 0, 0.85)';
        header.style.backdropFilter = 'blur(16px)';
        header.style.webkitBackdropFilter = 'blur(16px)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.07)';
      } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.webkitBackdropFilter = 'none';
        header.style.borderBottom = 'none';
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
});
