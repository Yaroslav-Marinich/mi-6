// Калькулятор модалки
const numberCastLuxeInput = document.querySelector('[name=numberCastLuxe]');
const numberCostLuxeInput = document.querySelector('[name=numberCostLuxe]');
const totalLuxe = document.querySelector('.totalLuxe');
const quantityLuxeLabel = document.querySelector('.quantityLuxe');

function calculateCostLuxe() {
  const numberCastLuxe = numberCastLuxeInput.value;
  const numberCostLuxe = numberCostLuxeInput.value;
  const costLuxe = numberCastLuxe * numberCostLuxe;

  console.log(numberCastLuxe);
  console.log(numberCostLuxe);
  console.log(costLuxe);
  document.getElementById('numberСostLuxe').value = costLuxe.toFixed(2);
}

calculateCostLuxe();

numberCastLuxeInput.addEventListener('input', calculateCostLuxe);
numberCostLuxeInput.addEventListener('input', calculateCostLuxe);
