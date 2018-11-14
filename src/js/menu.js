(function() {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(max-width: 1200px)').matches) {
      document.querySelector('.js-alt-menu').appendChild(document.querySelector('.js-menu'));
    }
  });
})();
