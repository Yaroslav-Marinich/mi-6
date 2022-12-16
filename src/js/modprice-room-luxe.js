// Модалка для room luxe
(() => {
  const refs = {
    openmodPriceRoomLuxeBtn: document.querySelector(
      '[data-modPriceRoomLuxe-open]'
    ),
    closemodPriceRoomLuxeBtn: document.querySelector(
      '[data-modPriceRoomLuxe-close]'
    ),
    modPriceRoomLuxe: document.querySelector('[data-modPriceRoomLuxe]'),
    body: document.querySelector('body'),
  };

  refs.openmodPriceRoomLuxeBtn.addEventListener(
    'click',
    togglemodPriceRoomLuxe
  );
  refs.closemodPriceRoomLuxeBtn.addEventListener(
    'click',
    togglemodPriceRoomLuxe
  );

  function togglemodPriceRoomLuxe() {
    refs.modPriceRoomLuxe.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
