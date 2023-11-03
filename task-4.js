const minusbutton = document.querySelector('[data-action="decrement"]');
const plusbutton = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let newValue = 0;

const updateCounter = () => {
    value.textContent = newValue;
};

const plus = () => {
    newValue += 1;
  updateCounter();
};

const minus = () => {
    newValue -= 1;
  updateCounter();
};

plusbutton.addEventListener('click', plus);
minusbutton.addEventListener('click', minus);
updateCounter();