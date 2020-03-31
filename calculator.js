const exampleAdditionInput = {
  num1: 3,
  num2: 0,
  operation: '/',
}

const calculator = function(object) {
  switch (object['operation']) {
    case 'add':
    case '+':
      return object['num1'] + object['num2'];
    case 'subtract':
    case '-':
      return object['num1'] - object['num2'];
    case 'multiple':
    case '*':
      return object['num1'] * object['num2'];
    case 'divide':
    case '/':
      return object['num1'] / object['num2'];
    default:
      return 'Invalid operator';
  }

}

console.log(calculator(exampleAdditionInput));