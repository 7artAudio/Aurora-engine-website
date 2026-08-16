/**
 * AURORA WEB — MAIN SCRIPT
 * Hero v1.0, Section 02 Aurora, Section 03 Experience, Section 04 Technology, Section 05 Vision, Section 06 Contact & Footer
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Trigger initial dark emergence sequence
  requestAnimationFrame(() => {
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-loaded');
  });

  // 2. Handle scroll indication and Header ambient backdrop
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

  // 3. Section Reveal Intersection Observer (Fail-Safe for #aurora, #experience, #technology, #vision, and #contact)
  const revealSections = document.querySelectorAll('.section-aurora, .section-experience, .section-technology, .section-vision, .section-contact');

  if ('IntersectionObserver' in window && revealSections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealSections.forEach(section => {
      // Check if already in viewport or accessed via hash anchor
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add('is-in-view');
      } else {
        observer.observe(section);
      }
    });
  } else {
    // Fallback: If IntersectionObserver is unsupported, reveal all sections immediately
    revealSections.forEach(section => section.classList.add('is-in-view'));
  }

  // 4. Handle direct anchor jump on page load (e.g., #experience)
  if (window.location.hash) {
    const targetEl = document.querySelector(window.location.hash);
    if (targetEl) {
      targetEl.classList.add('is-in-view');
    }
  }
});
