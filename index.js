let currentNumber = 0;
let previousNumber = 0;
let result = 0;
let history = [];
let operator = null;
let x = math.sqrt;

function add(input) {
  currentNumber = currentNumber * 10 + input;
  console.log(currentNumber);
  updateAktuell();
}

function setOperator(input) {
  if (operator !== null) {
    calculate();
  }
  previousNumber = currentNumber;
  currentNumber = 0;
  operator = input;
  updateAktuell();
  updatepreviousNumber();
}

function calculate() {
  if (operator === null) return;
  switch (operator) {
    case "+":
      result = previousNumber + currentNumber;
      break;
    case "-":
      result = previousNumber - currentNumber;
      break;
    case "/":
      result = previousNumber / currentNumber;
      break;
    case "*":
      result = previousNumber * currentNumber;
      break;
    default:
      return;
  }
  history.push(`${previousNumber} ${operator} ${currentNumber} = ${result}`);
  updateHistory();

  currentNumber = result;
  operator = null;
  updateAktuell();
}
function remove() {
  currentNumber = Math.floor(currentNumber / 10);
  updateAktuell();
}

function reset() {
  currentNumber = "";
  previousNumber = "";
  operator = null;
  history = [];

  document.getElementById("inputNumber").value = "";
  document.getElementById("inputMemory").value = "";
  document.getElementById("endResult").value = "";
  document.getElementById("sumHistory").innerHTML = "";
}

function updateAktuell() {
  document.getElementById("inputNumber").value = currentNumber;
}

function updatepreviousNumber() {
  document.getElementById("inputMemory").value = previousNumber;
}

function updateEndstand() {
  document.getElementById("endResult").value = result;
}

function updateHistory() {
  document.getElementById("sumHistory").innerHTML = history.join("<p>");
}

function hochzwei() {
  result = currentNumber * currentNumber;
  history.push(`${currentNumber}² = ${result}`);
  updateHistory();
  currentNumber = result;
  document.getElementById("inputNumber").value = result;
}

function wurzel() {
  if (currentNumber < 0) {
    alert("You cannot square root a negative number");
    return;
  }
  result = Math.sqrt(currentNumber);
  history.push(`√${currentNumber} = ${result}`);
  updateHistory();
  currentNumber = result;
  document.getElementById("inputNumber").value = result;
}

function change() {
  document.body.classList.toggle("darkmode");
}
