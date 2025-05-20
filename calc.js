const currentDisplayInput = document.getElementById('current-input');
const previousDisplayInput = document.getElementById('previous-input');
const numbers = document.querySelectorAll('.number-button');
let firstOperand = null;
let operator = null;
let shouldResetDisplay = false;

numbers.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
   if (currentDisplayInput.textContent === '0' || shouldResetDisplay) {
    currentDisplayInput.textContent = buttonValue === '.' ? '0.' : buttonValue;
    shouldResetDisplay = false;
   } else if (buttonValue === '.' && currentDisplayInput.textContent.includes('.')) {
    return;
   }else {
    currentDisplayInput.textContent += buttonValue;
   }
  })
})

const operatorButtons = document.querySelectorAll('.operator-button');

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (firstOperand !== null && operator !== null && !shouldResetDisplay) {
      const secondOperand = parseFloat(currentDisplayInput.textContent);
      const result = operate(firstOperand, secondOperand, operator);
      currentDisplayInput.textContent = result;
      firstOperand = result;
    } else {
      firstOperand = parseFloat(currentDisplayInput.textContent);
    }

    operator = button.textContent;
    previousDisplayInput.textContent = `${firstOperand} ${operator}`;
    shouldResetDisplay = true;
  });
});

const equalsButton = document.getElementById('equals-button');

equalsButton.addEventListener('click', () => {
  if (firstOperand === null || operator === null) return;

  const secondOperand = parseFloat(currentDisplayInput.textContent);
  try {
    const result = operate(firstOperand, secondOperand, operator);
    currentDisplayInput.textContent = result;
    previousDisplayInput.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
    firstOperand = result;
    operator = null;
    shouldResetDisplay = true;
  } catch (error) {
    currentDisplayInput.textContent = 'Error';
    firstOperand = null;
    operator = null;
  }
});


const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', () => {
  currentDisplayInput.textContent = '0';
  previousDisplayInput.textContent = '';
  firstOperand = null;
  operator = null;
  shouldResetDisplay = false;
});


const calculate = (a, b, operatorSymbol) => {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) return 'Error';

  switch (operatorSymbol) {
    case '+':
      return a + b;
    case '-':
      return a -b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) return 'Error';
      return a / b;
    default: 
      return 'Error';
  }
}

const operate = (a, b, operator) => {
  const result = calculate(a, b, operator);
  return Math.round(result * 10**8) / 10**8;
}