// Калькулятор модалки
const numberCastInput = document.querySelector('[name=numberCast]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');

function calculateCost() {
  const numberCast = numberCastInput.value;
  const quantity = 3000;
  const cost = numberCast * quantity;

  console.log(cost);

  document.getElementById('numberСost').value = cost.toFixed(2);
}

calculateCost();

numberCastInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', calculateCost);
