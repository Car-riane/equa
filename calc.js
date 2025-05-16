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