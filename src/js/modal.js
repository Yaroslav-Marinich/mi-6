(() => {
  const refs = {
    openmodalBtn: document.querySelector('[data-modal-open]'),
    closemodalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
    modalList: document.querySelector('.mob-modal__nav'),
  };

  refs.openmodalBtn.addEventListener('click', togglemodal);
  refs.closemodalBtn.addEventListener('click', togglemodal);
  refs.modalList.addEventListener('click', removemodal);

  function togglemodal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removemodal() {
    refs.modal.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();
