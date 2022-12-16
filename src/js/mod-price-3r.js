// Модалка для hotel-page room for 3
(() => {
  const refs = {
    openmodPrice3rBtn: document.querySelector('[data-modPrice3r-open]'),
    closemodPrice3rBtn: document.querySelector('[data-modPrice3r-close]'),
    modPrice3r: document.querySelector('[data-modPrice3r]'),
    body: document.querySelector('body'),
  };

  refs.openmodPrice3rBtn.addEventListener('click', togglemodPrice3r);
  refs.closemodPrice3rBtn.addEventListener('click', togglemodPrice3r);

  function togglemodPrice3r() {
    refs.modPrice3r.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
