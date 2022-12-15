// Модалка для menu table
(() => {
  const refs = {
    openmodMenuTableBtn: document.querySelector('[data-modMenuTable-open]'),
    closemodMenuTableBtn: document.querySelector('[data-modMenuTable-close]'),
    modMenuTable: document.querySelector('[data-modMenuTable]'),
    body: document.querySelector('body'),
  };

  refs.openmodMenuTableBtn.addEventListener('click', togglemodMenuTable);
  refs.closemodMenuTableBtn.addEventListener('click', togglemodMenuTable);

  function togglemodMenuTable() {
    refs.modMenuTable.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
