// Калькулятор модалки
const numberCastInput_ = document.querySelector('[name=numberCast]');
const numberCostInput_ = document.querySelector('[name=numberCost]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');

function calculateCost() {
  const numberCast = numberCastInput_.value;
  const numberCost = numberCostInput_.value;
  const cost = numberCast * numberCost;

  console.log(numberCast);
  console.log(numberCost);
  console.log(cost);
  document.getElementById('numberСost').value = cost.toFixed(2);
}

calculateCost();

numberCastInput_.addEventListener('input', calculateCost);
numberCostInput_.addEventListener('input', calculateCost);
