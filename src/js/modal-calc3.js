// Калькулятор модалки 3room
const numberCast3Input = document.querySelector('[name=numberCast3]');
const quantity3Input = document.querySelector('[name=quantity3]');
const total3 = document.querySelector('.total3');
const quantity3Label = document.querySelector('.quantity3-label');

function calculateCost3() {
  const numberCast3 = numberCast3Input.value;
  const quantity3 = 2000;
  const cost3 = numberCast3 * quantity3;

  console.log(cost3);

  document.getElementById('numberСost3').value = cost3.toFixed(2);
}

calculateCost3();

numberCast3Input.addEventListener('input', calculateCost3);
quantity3Input.addEventListener('input', calculateCost3);
quantity3Input.addEventListener('input', updateQuantity3Label);
