const inputs = document.querySelectorAll('input');
var value = 0 ;
inputs.forEach(input => {
  input.addEventListener('click', seatFunction, false);
});

function seatFunction() {
  inputs.forEach(input => input.classList.remove('active'))
  this.classList.add('active');
  return value = this.value;
}


const button = document.querySelector('button');
const div_container = document.getElementsByClassName('container');
const div_container_thank = document.getElementsByClassName('hidden');
const span = document.getElementById('value');

console.log(span);

button.addEventListener("click", displayThank, false);

function displayThank() {
    div_container_thank[0].classList.remove('hidden');
    div_container[0].classList.add('hidden');
    span.innerHTML = `${value}`;
}


