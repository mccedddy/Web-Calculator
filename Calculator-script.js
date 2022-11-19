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
var secondNumber = "";
var operation = "";
var result = "";

// Functions
function inputNumber(inputNumber){
    // 0 input
    if (inputNumber == 0){
        if (document.getElementById("text").innerHTML !== "0"){
            currentNumber += inputNumber;
            document.getElementById("text").innerHTML = currentNumber;
        }
    }
    // Decimal input
    else if (inputNumber == "."){
        if (document.getElementById("text").innerHTML === "0"){
            currentNumber += "0.";
            document.getElementById("text").innerHTML = currentNumber;
        } 
        if (document.getElementById("text").innerHTML.includes(".") == false){
            currentNumber += ".";
            document.getElementById("text").innerHTML = currentNumber;
        }
    }
    // Sign input
    else if (inputNumber === "-"){
        if (document.getElementById("text").innerHTML !== "0"){
            if (document.getElementById("text").innerHTML.includes("-") == false){
                currentNumber = "-" + currentNumber;
                document.getElementById("text").innerHTML = currentNumber;
            }
            else {
                currentNumber = currentNumber.slice(1)
                document.getElementById("text").innerHTML = currentNumber;
            }
        } 
    }
    // Number Input
    else {
        currentNumber += inputNumber;
        document.getElementById("text").innerHTML = currentNumber;
    }
}

function clear() {
    currentNumber = "";
    firstNumber = "";
    secondNumber = "";
    operation = "";
    document.getElementById("text").innerHTML = "0";
}

function inputOperation(inputOperation){
    if (operation != ""){
        equals();
        firstNumber = document.getElementById("text").innerHTML
        operation = inputOperation;
        currentNumber = "";
    } else {
        firstNumber = document.getElementById("text").innerHTML
        operation = inputOperation
        currentNumber = "";
        document.getElementById("text").innerHTML = "0"
    }
}

function equals(){
    if (operation != ""){
        secondNumber = document.getElementById("text").innerHTML
        switch (operation) {
            case "+":
                result = Number(firstNumber) + Number(secondNumber)
                break;
            case "-":
                result = Number(firstNumber) - Number(secondNumber)
                break;
            case "*":
                result = Number(firstNumber) * Number(secondNumber)
                break;
            case "/":
                result = Number(firstNumber) / Number(secondNumber)
                break;
        }
        document.getElementById("text").innerHTML = result
        operation = "";
    }
}

// Button click
buttonAdd.onclick = function() {inputOperation("+")};
buttonSubtract.onclick = function() {inputOperation("-")};
buttonMultiply.onclick = function() {inputOperation("*")};
buttonDivide.onclick = function() {inputOperation("/")};
button1.onclick = function() {inputNumber("1")};
button2.onclick = function() {inputNumber("2")};
button3.onclick = function() {inputNumber("3")};
button4.onclick = function() {inputNumber("4")};
button5.onclick = function() {inputNumber("5")};
button6.onclick = function() {inputNumber("6")};
button7.onclick = function() {inputNumber("7")};
button8.onclick = function() {inputNumber("8")};
button9.onclick = function() {inputNumber("9")};
button0.onclick = function() {inputNumber("0")};
buttonDecimal.onclick = function(){inputNumber(".")};
buttonSign.onclick = function(){inputNumber("-")};
buttonClear.onclick = function() {clear()};
buttonEquals.onclick = function() {equals()};
