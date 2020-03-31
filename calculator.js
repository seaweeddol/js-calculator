const exampleAdditionInput = {
  num1: 52,
  num2: '',
  operation: 'multiply',
}

const calculator = function(input) {
  if (!validateInput(input)) return "Please provide valid input";

  switch (input['operation']) {
    case 'add':
    case '+':
      return input['num1'] + input['num2'];
    case 'subtract':
    case '-':
      return input['num1'] - input['num2'];
    case 'multiply':
    case '*':
      return input['num1'] * input['num2'];
    case 'divide':
    case '/':
      return divide(input.num1, input.num2);
    default:
      return 'Invalid operator';
  }

}

const validateInput = input => {
  validOperators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/'];

  if (!parseInt(input.num1) || !parseInt(input.num2) || !validOperators.includes(input.operation)) {
    return false;
  }
  return true;
}

const divide = function(num1, num2) {
  if (num2 === 0) {
    return 'Cannot divide by 0';
  } else {
    return num1 / num2;
  }
}

console.log(calculator(exampleAdditionInput));