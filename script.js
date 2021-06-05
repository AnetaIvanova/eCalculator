// create an object for the eCalculator
const ecalculator = {
  displayInput: "", //the current input
  firstInput: null, //the previous input
  onNextInput: false, // checks if there are both previous and current inputs
  operation: null, //store the operation for expression
};

/*define the methods for the calculator object:*/

//change the display value when the user clicks a different button
function inputDigit(digit) {
  const { displayInput, onNextInput } = ecalculator;

  if (onNextInput === true) {
    ecalculator.displayInput = digit;
    ecalculator.onNextInput = false;
  } else {
    ecalculator.displayInput =
      displayInput === "" ? digit : displayInput + digit;
  }
}

//fix the decimal point
function inputDecimal(dot) {
  if (ecalculator.onNextInput === true) {
    ecalculator.displayInput = "";
    ecalculator.onNextInput = false;
    return;
  }

  if (!ecalculator.displayInput.includes(dot)) {
    ecalculator.displayInput += dot;
  }
}

//when the user clicks on operation after the first input
function handleOperator(nextOperator) {
  const { firstInput, displayInput, operation } = ecalculator;
  const inputValue = parseFloat(displayInput);

  if (operation && ecalculator.onNextInput) {
    ecalculator.operation = nextOperator;
    return;
  }

  if (firstInput == null && !isNaN(inputValue)) {
    ecalculator.firstInput = inputValue;
  } else if (operation) {
    const result = calculate(firstInput, inputValue, operation);

    ecalculator.displayInput = `${parseFloat(result.toFixed(7))}`;
    ecalculator.firstInput = result;
  }
  ecalculator.onNextInput = true;
  ecalculator.operation = nextOperator;
}

//when the user has hit an operation after a second operand
function calculate(firstInput, secondInput, operation) {
  if (operation === "+") {
    return firstInput + secondInput;
  } else if (operation === "-") {
    return firstInput - secondInput;
  } else if (operation === "*") {
    return firstInput * secondInput;
  } else if (operation === "/") {
    return firstInput / secondInput;
  }
  return secondInput;
}

//reset the calculator
function resetEcalculator() {
  ecalculator.displayInput = "";
  ecalculator.firstInput = null;
  ecalculator.onNextInput = false;
  ecalculator.operation = null;
}

//update display
function updateDisplay() {
  const display = document.querySelector(".output");
  display.value = ecalculator.displayInput;
}
updateDisplay();

const keys = document.querySelectorAll(".button");
console.log(keys);

keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    const { target } = event;
    const { value } = target;
    if (!target.matches("button")) {
      return;
    }

    switch (value) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "=":
        handleOperator(value);
        break;
      case ".":
        inputDecimal(value);
        break;
      case "delete-all button":
        resetCalculator();
        break;
      case "delete button":
        resetCalculator();
        break;
      default:
        inputDigit(value);
    }
    updateDisplay();
  });
});
