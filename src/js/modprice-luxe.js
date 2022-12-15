// Модалка для room luxe
(() => {
  const refs = {
    openmodPriceLuxeBtn: document.querySelector('[data-modPriceLuxe-open]'),
    closemodPriceLuxeBtn: document.querySelector('[data-modPriceLuxe-close]'),
    modPriceLuxe: document.querySelector('[data-modPriceLuxe]'),
    body: document.querySelector('body'),
  };

  refs.openmodPriceLuxeBtn.addEventListener('click', togglemodPriceLuxe);
  refs.closemodPriceLuxeBtn.addEventListener('click', togglemodPriceLuxe);

  function togglemodPriceLuxe() {
    refs.modPriceLuxe.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
