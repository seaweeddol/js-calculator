// This line "loads" the prompt package and puts it into a variable we can use called prompt
// Lines like this (that use require()) typically go on the top of the file
const prompt = require('prompt');

const calculateUserInput = function(error, promptInput) {
  console.log(calculator(promptInput));
}  

//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the user input
prompt.get(['num1','num2','operation'], calculateUserInput);

const calculator = function(input) {
  if (!validateInput(input)) return "Please provide valid input";
  
  num1 = Number(input['num1']);
  num2 = Number(input['num2']);
  
  switch (input['operation']) {
    case 'add':
    case '+':
      return num1 + num2;
    case 'subtract':
    case '-':
      return num1 - num2;
    case 'multiply':
    case '*':
      return num1 * num2;
    case 'divide':
    case '/':
      return divide(num1, num2);
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