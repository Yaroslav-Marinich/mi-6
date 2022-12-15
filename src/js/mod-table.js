// Модалка для hotel-page столик
(() => {
  const refs = {
    openmodTableBtn: document.querySelector('[data-modTable-open]'),
    closemodTableBtn: document.querySelector('[data-modTable-close]'),
    modTable: document.querySelector('[data-modTable]'),
    body: document.querySelector('body'),
  };

  refs.openmodTableBtn.addEventListener('click', togglemodTable);
  refs.closemodTableBtn.addEventListener('click', togglemodTable);

  function togglemodTable() {
    refs.modTable.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
