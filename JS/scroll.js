
// Scroll :hover Thumb
document.addEventListener('DOMContentLoaded', () => {
    const scrollAreas = document.querySelectorAll('[data-simplebar]');
  
    scrollAreas.forEach(scrollArea => {
      let scrollTimeout;
  
      // Espera que SimpleBar haya inicializado el wrapper
      const observer = new MutationObserver(() => {
        const contentWrapper = scrollArea.querySelector('.simplebar-content-wrapper');
        if (contentWrapper) {
          contentWrapper.addEventListener('scroll', () => {
            scrollArea.classList.add('scrolling');
  
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              scrollArea.classList.remove('scrolling');
            }, 500);
          });
  
          observer.disconnect();
        }
      });
  
      observer.observe(scrollArea, { childList: true, subtree: true });
    });
  });
  