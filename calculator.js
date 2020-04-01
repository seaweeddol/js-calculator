// This line "loads" the prompt package and puts it into a variable we can use called prompt
// Lines like this (that use require()) typically go on the top of the file
const prompt = require('prompt');

const printResult = function(error, promptInput) {
  if (!validateInput(promptInput)) {
    console.log("Please provide valid input");
    prompt.get(['num1','num2','operation'], printResult);
  } 

  console.log(calculate(promptInput));
}  

//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the user input
prompt.get(['num1','num2','operation'], printResult);

const calculate = function(input) {
  num1 = Number(input['num1']);
  num2 = Number(input['num2']);
  
  switch (input['operation']) {
    case 'add':
    case '+':
      return add(num1, num2);
    case 'subtract':
    case '-':
      return subtract(num1, num2);
    case 'multiply':
    case '*':
      return multiply(num1, num2);
    case 'divide':
    case '/':
      return divide(num1, num2);
    case 'exponent':
    case '^':
      return exponent(num1, num2);
    case 'modulo':
    case '%':
      return modulo(num1, num2);
  }
}

const validateInput = input => {
  validOperators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/', 'exponent', '^', 'modulo', '%'];

  if (isNaN(parseInt(input.num1)) || isNaN(parseInt(input.num2)) || !validOperators.includes(input.operation)) {
    return false;
  }
  return true;
}

const add = (num1, num2) => {
  return `${num1} + ${num2} = ` + (num1 + num2);
}

const subtract = (num1, num2) => {
  return `${num1} - ${num2} = ` + (num1 - num2);
}

const multiply = (num1, num2) => {
  return `${num1} * ${num2} = ` + (num1 * num2);
}

const divide = (num1, num2) => {
  if (num2 === 0) {
    return 'Cannot divide by 0';
  } else {
    return `${num1} / ${num2} = ` + (num1 / num2);
  }
}

const exponent = (num1, num2) => {
  formula = `${num1}`
  product = num1;
  for(let i = 1; i < num2; i++) {
    formula += ` * ${num1}`;
    product *= num1;
  }
  return `${formula} = ` + product;
}

const modulo = (num1, num2) => {
  return `${num1} % ${num2} = ` + (num1 % num2);
}