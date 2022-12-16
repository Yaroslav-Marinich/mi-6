// Калькулятор модалки
const numberCast3rInput = document.querySelector('[name=numberCast3r]');
const numberCost3rInput = document.querySelector('[name=numberCost3r]');
const total3r = document.querySelector('.total3r');
const quantity3rLabel = document.querySelector('.quantity3r');

function calculateCost3r() {
  const numberCast3r = numberCast3rInput.value;
  const numberCost3r = numberCost3rInput.value;
  const cost3r = numberCast3r * numberCost3r;

  console.log(numberCast3r);
  console.log(numberCost3r);
  console.log(cost3r);
  document.getElementById('numberСost3r').value = cost3r.toFixed(2);
}

calculateCost3r();

numberCast3rInput.addEventListener('input', calculateCost3r);
numberCost3rInput.addEventListener('input', calculateCost3r);
