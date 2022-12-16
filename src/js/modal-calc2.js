// Калькулятор модалки
const numberCast2rInput = document.querySelector('[name=numberCast2r]');
const numberCost2rInput = document.querySelector('[name=numberCost2r]');
const total2r = document.querySelector('.total2r');
const quantity2rLabel = document.querySelector('.quantity2r');

function calculateCost2r() {
  const numberCast2r = numberCast2rInput.value;
  const numberCost2r = numberCost2rInput.value;
  const cost2r = numberCast2r * numberCost2r;

  console.log(numberCast2r);
  console.log(numberCost2r);
  console.log(cost2r);
  document.getElementById('numberСost2r').value = cost2r.toFixed(2);
}

calculateCost2r();

numberCast2rInput.addEventListener('input', calculateCost2r);
numberCost2rInput.addEventListener('input', calculateCost2r);
