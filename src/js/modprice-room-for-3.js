// Модалка для room for 3
(() => {
  const refs = {
    openmodPriceRoomFor3Btn: document.querySelector(
      '[data-modPriceRoomFor3-open]'
    ),
    closemodPriceRoomFor3Btn: document.querySelector(
      '[data-modPriceRoomFor3-close]'
    ),
    modPriceRoomFor3: document.querySelector('[data-modPriceRoomFor3]'),
    body: document.querySelector('body'),
  };

  refs.openmodPriceRoomFor3Btn.addEventListener(
    'click',
    togglemodPriceRoomFor3
  );
  refs.closemodPriceRoomFor3Btn.addEventListener(
    'click',
    togglemodPriceRoomFor3
  );

  function togglemodPriceRoomFor3() {
    refs.modPriceRoomFor3.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
