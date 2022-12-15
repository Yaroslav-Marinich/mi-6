// Модалка для hotel-page room
(() => {
  const refs = {
    openmodRoomBtn: document.querySelector('[data-modRoom-open]'),
    closemodRoomBtn: document.querySelector('[data-modRoom-close]'),
    modRoom: document.querySelector('[data-modRoom]'),
    body: document.querySelector('body'),
  };

  refs.openmodRoomBtn.addEventListener('click', togglemodRoom);
  refs.closemodRoomBtn.addEventListener('click', togglemodRoom);

  function togglemodRoom() {
    refs.modRoom.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
