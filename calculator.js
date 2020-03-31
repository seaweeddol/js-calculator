const exampleAdditionInput = {
  num1: 5,
  num2: ' ',
  operation: '+',
}

const calculator = function(input) {
  if ((input.num1 === '') || (input.num2 === '') || !(input.num1 >= 0) || !(input.num2 >= 0)) {
    return 'Valid numbers must be provided.';
  }

  switch (input['operation']) {
    case 'add':
    case '+':
      return input['num1'] + input['num2'];
    case 'subtract':
    case '-':
      return input['num1'] - input['num2'];
    case 'multiple':
    case '*':
      return input['num1'] * input['num2'];
    case 'divide':
    case '/':
      return divide(input.num1, input.num2);
    default:
      return 'Invalid operator';
  }

}

const divide = function(num1, num2) {
  if (num2 === 0) {
    return 'Cannot divide by 0';
  } else {
    return num1 / num2;
  }
}

console.log(calculator(exampleAdditionInput));