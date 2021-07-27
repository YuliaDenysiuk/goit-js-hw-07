const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = Number(valueRef.textContent);

function onDecrement() {
    counterValue -= 1;
    valueRef.textContent = counterValue;    
}

function onIncrement() {
    counterValue += 1;
    valueRef.textContent = counterValue;
}

decrementButtonRef.addEventListener("click", onDecrement);
incrementButtonRef.addEventListener("click", onIncrement);
