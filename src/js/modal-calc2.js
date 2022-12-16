// Калькулятор модалки 2room
const numberCast2Input = document.querySelector('[name=numberCast2]');
const quantity2Input = document.querySelector('[name=quantity2]');
const total2 = document.querySelector('.total2');
const quantity2Label = document.querySelector('.quantity2-label');

function calculateCost2() {
  const numberCast2 = numberCast2Input.value;
  const quantity2 = 1000;
  const Cost2 = numberCast2 * quantity2;

  console.log(Cost2);

  document.getElementById('numberСost2').value = Cost2.toFixed(2);
}
calculateCost2();

numberCast2Input.addEventListener('input', calculateCost2);
quantity2Input.addEventListener('input', calculateCost2);
