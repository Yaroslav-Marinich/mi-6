// Модалка для room for 2
(() => {
  const refs = {
    openmodPriceRoomFor2Btn: document.querySelector(
      '[data-modPriceRoomFor2-open]'
    ),
    closemodPriceRoomFor2Btn: document.querySelector(
      '[data-modPriceRoomFor2-close]'
    ),
    modPriceRoomFor2: document.querySelector('[data-modPriceRoomFor2]'),
    body: document.querySelector('body'),
  };

  refs.openmodPriceRoomFor2Btn.addEventListener(
    'click',
    togglemodPriceRoomFor2
  );
  refs.closemodPriceRoomFor2Btn.addEventListener(
    'click',
    togglemodPriceRoomFor2
  );

  function togglemodPriceRoomFor2() {
    refs.modPriceRoomFor2.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
