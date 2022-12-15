// Модалка для detalis table
(() => {
  const refs = {
    openmodDetTableBtn: document.querySelector('[data-modDetTable-open]'),
    closemodDetTableBtn: document.querySelector('[data-modDetTable-close]'),
    modDetTable: document.querySelector('[data-modDetTable]'),
    body: document.querySelector('body'),
  };

  refs.openmodDetTableBtn.addEventListener('click', togglemodDetTable);
  refs.closemodDetTableBtn.addEventListener('click', togglemodDetTable);

  function togglemodDetTable() {
    refs.modDetTable.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
