// Buttons and Text
var buttonAdd = document.getElementById("+");
var buttonSubtract = document.getElementById("-");
var buttonMultiply = document.getElementById("*");
var buttonDivide = document.getElementById("/");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var button5 = document.getElementById("5");
var button6 = document.getElementById("6");
var button7 = document.getElementById("7");
var button8 = document.getElementById("8");
var button9 = document.getElementById("9");
var button0 = document.getElementById("0");
var buttonSign = document.getElementById("sign");
var buttonDecimal = document.getElementById("decimal");
var buttonClear = document.getElementById("clear");
var buttonEquals = document.getElementById("equals");
var textBox = document.getElementById("text").innerHTML;

// Variables
var currentNumber = "";
var firstNumber = "";
var operation = "";
var result = "";

// Functions
function inputNumber(inputNumber){
    currentNumber += inputNumber;
    display(currentNumber);
}

function inputOperation(inputOperation){
    firstNumber = document.getElementById("text").innerHTML;
    currentNumber = "";
    operation = inputOperation;
}

function clear() {
    currentNumber = "";
    operation = "";
    document.getElementById("text").innerHTML = "0";
}

function equals(){
    switch (operation){
        case "+":
            result = Number(firstNumber) + Number(currentNumber);
            break;
        case "-":
            result = Number(firstNumber) - Number(currentNumber);
            break;
        case "*":
            result = Number(firstNumber) * Number(currentNumber);
            break;
        case "/":
            result = Number(firstNumber) / Number(currentNumber);
            break;
    }
    display(result);
    result = "";
    operation = "";
    currentNumber = "";
    firstNumber = "";
}

function display(number){
    document.getElementById("text").innerHTML = number;
}

// Button click
buttonAdd.onclick = function() {inputOperation("+")}
buttonSubtract.onclick = function() {inputOperation("-")}
buttonMultiply.onclick = function() {inputOperation("*")}
buttonDivide.onclick = function() {inputOperation("/")}
button1.onclick = function() {inputNumber("1")}
button2.onclick = function() {inputNumber("2")}
button3.onclick = function() {inputNumber("3")}
button4.onclick = function() {inputNumber("4")}
button5.onclick = function() {inputNumber("5")}
button6.onclick = function() {inputNumber("6")}
button7.onclick = function() {inputNumber("7")}
button8.onclick = function() {inputNumber("8")}
button9.onclick = function() {inputNumber("9")}
button0.onclick = function() {inputNumber("0")}
buttonDecimal.onclick = function(){inputNumber(".")}
buttonSign.onclick = function(){inputNumber("-")}
buttonClear.onclick = function() {clear()}
buttonEquals.onclick = function() {equals()}
