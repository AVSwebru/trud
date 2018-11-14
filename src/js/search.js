(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.js-search-btn');

    searchBtn.addEventListener('click', () => {
      searchBtn.classList.toggle('active');
    });

    if (window.matchMedia('(max-width: 960px)').matches) {
      document.querySelector('.js-header-info').appendChild(document.querySelector('.js-search'));
    }

  });
})();
