// Калькулятор модалки
const numberCastInput = document.querySelector('[name=numberCast]');
const numberCostInput = document.querySelector('[name=numberCost]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');

function calculateCost() {
  const numberCast = numberCastInput.value;
  const numberCost = numberCostInput.value;
  const cost = numberCast * numberCost;

  console.log(numberCast);
  console.log(numberCost);
  console.log(cost);
  document.getElementById('numberСost').value = cost.toFixed(2);
}

calculateCost();

numberCastInput.addEventListener('input', calculateCost);
numberCostInput.addEventListener('input', calculateCost);
