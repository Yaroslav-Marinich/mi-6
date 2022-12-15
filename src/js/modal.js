// Модалка для hotel-page двохмісна

(() => {
  const refs = {
    openmodPriceBtn: document.querySelector('[data-modPrice-open]'),
    closemodPriceBtn: document.querySelector('[data-modPrice-close]'),
    modPrice: document.querySelector('[data-modPrice]'),
    body: document.querySelector('body'),
  };

  refs.openmodPriceBtn.addEventListener('click', togglemodPrice);
  refs.closemodPriceBtn.addEventListener('click', togglemodPrice);

  function togglemodPrice() {
    refs.modPrice.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// Калькулятор модалки

const numberCastInput = document.querySelector('[name=numberCast]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');

function calculateCost() {
  const numberCast = numberCastInput.value;
  const quantity = 1000;
  const cost = numberCast * quantity;

  console.log(cost);

  document.getElementById('numberСost').value = cost.toFixed(2);
}

calculateCost();

numberCastInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', updateQuantityLabel);
