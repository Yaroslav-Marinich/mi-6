// Модалка для detalis room
(() => {
  const refs = {
    openmodDetRoomBtn: document.querySelector('[data-modDetRoom-open]'),
    closemodDetRoomBtn: document.querySelector('[data-modDetRoom-close]'),
    modDetRoom: document.querySelector('[data-modDetRoom]'),
    body: document.querySelector('body'),
  };

  refs.openmodDetRoomBtn.addEventListener('click', togglemodDetRoom);
  refs.closemodDetRoomBtn.addEventListener('click', togglemodDetRoom);

  function togglemodDetRoom() {
    refs.modDetRoom.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
