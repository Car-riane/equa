const currentDisplayInput = document.getElementById('current-input');
const previousDisplayInput = document.getElementById('previous-input');
const numbers = document.querySelectorAll('.number-button');

numbers.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    let currentDisplayValue = currentDisplayInput.textContent;
    if (currentDisplayValue === '0' && buttonValue !== '.') {
      currentDisplayInput.textContent = buttonValue;
    }
    else if (buttonValue === '.') {
      if (!currentDisplayValue.includes('.')) {
        currentDisplayInput.textContent += buttonValue;
      }
    }
    else {
      currentDisplayInput.textContent += buttonValue;
    }
  })
})

const calculate = (a, b, operatorSymbol) => {
  switch (operatorSymbol) {
    case '+':
      return a + b;
    case '-':
      return a -b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        console.log('Error');
      }
      return a / b;
    default: 
      console.log('Invalid Operator');
  }
}

const operate = (a, b, operator) => {
  return calculate(a, b, operator);
}