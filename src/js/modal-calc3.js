// Калькулятор модалки 3room
const numberCast3Input = document.querySelector('[name=numberCast3]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');

function calculateCost() {
  const numberCast3 = numberCast3Input.value;
  const quantity = 1000;
  const cost = numberCast3 * quantity;

  console.log(cost);

  document.getElementById('numberСost3').value = cost.toFixed(2);
}

calculateCost();

numberCast3Input.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', updateQuantityLabel);
