// Basic Calculator Functions

let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number.toString();
    document.getElementById('display').value = currentInput;
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = previousInput + ' ' + currentOperation;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    document.getElementById('display').value = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Tidak bisa dibagi nol');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    currentOperation = null;
    previousInput = '';
    document.getElementById('display').value = result;
}

// BMI Calculator Functions
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Masukkan nilai yang valid untuk berat dan tinggi badan.");
        return;
    }

    const bmi = weight / (height * height);
    let resultText = `Your BMI: ${bmi.toFixed(2)}`; 

    if (bmi < 18.5) {
        resultText += " (Kurus)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText += " (Normal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText += " (Gemuk)";
    } else {
        resultText += " (Obesitas)";
    }

    document.getElementById('result').innerText = resultText;
}

