// Get elements
const resultDisplay = document.getElementById('result');
let result = 0;

// Button event listeners
document.getElementById('minus-two').addEventListener('click', () => {
    result -= 2;
    updateResult();
});

document.getElementById('minus-one').addEventListener('click', () => {
    result -= 1;
    updateResult();
});

document.getElementById('plus-one').addEventListener('click', () => {
    result += 1;
    updateResult();
});

document.getElementById('plus-two').addEventListener('click', () => {
    result += 2;
    updateResult();
});

document.getElementById('reset').addEventListener('click', () => {
    result = 0;
    updateResult();
});

// Update result display
function updateResult() {
    resultDisplay.innerText = result;
}
