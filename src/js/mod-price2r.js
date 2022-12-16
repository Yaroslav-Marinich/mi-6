// Модалка для hotel-page двохмісна
(() => {
  const refs = {
    openmodPriceBtn: document.querySelector('[data-modPrice2r-open]'),
    closemodPriceBtn: document.querySelector('[data-modPrice2r-close]'),
    modPrice: document.querySelector('[data-modPrice2r]'),
    body: document.querySelector('body'),
  };

  refs.openmodPriceBtn.addEventListener('click', togglemodPrice);
  refs.closemodPriceBtn.addEventListener('click', togglemodPrice);

  function togglemodPrice() {
    refs.modPrice.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
