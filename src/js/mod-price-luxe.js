// Модалка для hotel-page двохмісна люкс

(() => {
  const refs = {
    openmodPriceBtn: document.querySelector('[data-modPriceLuxe-open]'),
    closemodPriceBtn: document.querySelector('[data-modPriceLuxe-close]'),
    modPrice: document.querySelector('[data-modPriceLuxe]'),
    body: document.querySelector('body'),
  };

  refs.openmodPriceBtn.addEventListener('click', togglemodPrice);
  refs.closemodPriceBtn.addEventListener('click', togglemodPrice);

  function togglemodPrice() {
    refs.modPrice.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
