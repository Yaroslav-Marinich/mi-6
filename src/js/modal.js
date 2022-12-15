(() => {
  const refs = {
    openmodal2lBtn: document.querySelector('[data-modal2l-open]'),
    closemodal2lBtn: document.querySelector('[data-modal2l-close]'),
    modal2l: document.querySelector('[data-modal2l]'),
    body: document.querySelector('body'),
    modal2lList: document.querySelector('.mob-modal2l__nav'),
  };

  refs.openmodal2lBtn.addEventListener('click', togglemodal2l);
  refs.closemodal2lBtn.addEventListener('click', togglemodal2l);
  refs.modal2lList.addEventListener('click', removemodal2l);

  function togglemodal2l() {
    refs.modal2l.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removemodal2l() {
    refs.modal2l.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();
