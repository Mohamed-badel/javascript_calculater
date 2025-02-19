const display = document.getElementById("display");
let expression = "";

function appendToDisplay(input) {
    expression += input;
    display.value = expression; // Show equation on first line
}

function clearDisplay() {
    expression = "";
    display.value = "";
}

function calculate() {
    try {
        let result = eval(expression);
        display.value = expression + "\n" + result; // Show equation and result in two lines
    } catch (error) {
        display.value = "Error";
    }
}